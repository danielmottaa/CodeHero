import React, { useEffect, useRef, useState } from 'react';
import { useFonts, Roboto_300Light, Roboto_900Black } from '@expo-google-fonts/roboto';
import StatusBar from '../../components/StatusBar';
import Colors from '../../global/colors';
import Input from '../../components/Input';
import * as S from './styles';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

const Home: React.FC = () => {

  const dataHero = useRef<any>(null);
  const dataPerPage = useRef(4);
  const dataHeroFiltered = useRef<any>(null)
  const [pagination, setPagination] = useState(1);
  const [currentPosts, setcurrentPosts] = useState([]);

  const apiKey = 'fd49d93aab08c57ab8cb2f23cdd95def';
  const hackApiKey = '6066446c6e90a054540043dc3744db9b'

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await api.get(`characters?ts=1&apikey=${apiKey}&hash=${hackApiKey}`);
        const { data } = response.data;
        dataHero.current = data?.results;
        setcurrentPosts(data.results.slice(firstPostIndex, lastPostIndex))
      } catch (error) {
        console.log(error)
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
      <S.BoxContent>
        <S.FlatListCustom
          data={currentPosts}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          showsVerticalScrollIndicator={false}

        />
      </S.BoxContent>
      <Pagination
        totalPosts={dataHeroFiltered.current ? dataHeroFiltered.current.length : dataHero.current?.length}
        postsPerPage={dataPerPage.current}
        setCurrentPages={setPagination}
        currentPage={pagination}
      />
    </S.Container>
  );
}

export default Home;