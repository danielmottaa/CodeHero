import React, { useEffect, useRef, useState } from 'react';
import { useFonts, Roboto_300Light, Roboto_900Black } from '@expo-google-fonts/roboto';

import StatusBar from '@components/StatusBar';
import Input from '@components/Input';
import Pagination from '@components/Pagination';

import Colors from '../../global/colors';
import api, { API_KEY, HASH_KEY } from '../../services/api';

import { useNavigation } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import * as S from './styles';

const Home: React.FC = () => {

  const { navigate }: any = useNavigation();
  const dataHero = useRef<any>(null);
  const dataPerPage = useRef(4);
  const dataHeroFiltered = useRef<any>(null)
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentPosts, setcurrentPosts] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await api.get(`characters?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`);
        const { data } = response.data;
        dataHero.current = data?.results;
        setcurrentPosts(data.results.slice(firstPostIndex, lastPostIndex))
      } catch (error) {
        showMessage({
          message: "Ops...",
          description: "Algo deu errado",
          type: "danger",
        });
      } finally {
        setLoading(false)
      }
    }
    getApiData();
  }, []);

  const lastPostIndex = pagination * dataPerPage.current;
  const firstPostIndex = lastPostIndex - dataPerPage.current;

  const filterPagination = () => {
    if (dataHeroFiltered.current?.length) {
      const newPosts = dataHeroFiltered?.current?.slice(firstPostIndex, lastPostIndex);
      setcurrentPosts(newPosts);
    } else {
      const newPosts = dataHero?.current?.slice(firstPostIndex, lastPostIndex);
      setcurrentPosts(newPosts);
    }
  }

  const slicePost = (post: any) => {
    if (post.length > 4) {
      post = post.slice(0, 4);
    }
    return post;
  }

  const responseFilter = (text: string) => {
    return dataHero?.current?.filter((item: any) => {
      return item?.name?.toLowerCase().indexOf(text.toLowerCase()) >= 0;
    });
  }

  const filterPaginationByText = (text: string) => {
    let newPosts = responseFilter(text);
    if (text === '') {
      newPosts = slicePost(newPosts);
      setcurrentPosts(newPosts);
      dataHeroFiltered.current = null;
    } else {
      dataHeroFiltered.current = newPosts;
      newPosts = slicePost(newPosts);
      setcurrentPosts(newPosts);
    }
    setPagination(1);
  }

  useEffect(() => {
    filterPagination();
  }, [firstPostIndex])

  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_900Black,
  });

  if (!fontLoaded) {
    return null;
  }

  const handleInfoHero = (item: any) => {
    navigate('HeroDetail', { item })
  }

  const renderItem = ({ item }: any) => {
    return (
      <>
        <S.CustomButton onPress={() => handleInfoHero(item)}>
          <S.BoxHeroContent>
            <S.ImageCustom source={{ uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}` }} />
            <S.LabelHeroName numberOfLines={1}>{item?.name}</S.LabelHeroName>
          </S.BoxHeroContent>
        </S.CustomButton>
        <S.LineSeparatorHero />
      </>
    );
  }

  return (
    <S.Container>
      <StatusBar backgroundColor={Colors.BLACK} barStyle={'light-content'} />
      <S.ContentHeader>
        <S.LabelTilePage>BUSCA MARVEL <S.SpanTextTitlePage>TESTE FRONT-END</S.SpanTextTitlePage></S.LabelTilePage>
        <S.LineSeparator />
        <S.LabelCharacterName>Nome do Personagem</S.LabelCharacterName>
        <Input
          onChangeText={(text) => filterPaginationByText(text)}
        />
      </S.ContentHeader>
      <S.BoxSeparatorHeader>
        <S.LabelName>Nome</S.LabelName>
      </S.BoxSeparatorHeader>
      {currentPosts?.length === 0
        ?
        <S.BoxEmptySearch>
          <S.LabelEmptySearch>Nenhum dado encontrato</S.LabelEmptySearch>
        </S.BoxEmptySearch>
        :
        <>
          <S.BoxContent>
            {loading && (
              <S.BoxEmptySearch>
                <S.LoadingCustom size={'large'} color={Colors.RED_PRIMARY} />
              </S.BoxEmptySearch>
            )}
            {!loading && (
              <S.FlatListCustom
                testID='flatlist'
                data={currentPosts}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
                showsVerticalScrollIndicator={false}
              />
            )}
          </S.BoxContent>
          <Pagination
            totalPosts={dataHeroFiltered.current ? dataHeroFiltered.current.length : dataHero.current?.length}
            postsPerPage={dataPerPage.current}
            setCurrentPages={setPagination}
            currentPage={pagination}
          />
        </>
      }
    </S.Container>
  );
}

export default Home;