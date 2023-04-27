import React, { useEffect, useState } from 'react';
import { useFonts, Roboto_300Light, Roboto_900Black } from '@expo-google-fonts/roboto';
import StatusBar from '../../components/StatusBar';
import Colors from '../../global/colors';
import Input from '../../components/Input';
import * as S from './styles';
import api from '../../services/api';
import axios from 'axios';

const Home: React.FC = () => {

  const [characterName, setCharacterName] = useState('');
  const [dataHeros, setDataHeros] = useState<any[]>([]);

  const apiKey = 'fd49d93aab08c57ab8cb2f23cdd95def';
  const hackApiKey = '6066446c6e90a054540043dc3744db9b'


  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await api.get(`characters?ts=1&apikey=${apiKey}&hash=${hackApiKey}`);
        const { data } = response.data;
        setDataHeros(data?.results)
      } catch (error) {
        console.log(error)
      }
    }
    getApiData();
  }, []);

  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_900Black,
  });

  if (!fontLoaded) {
    return null;
  }

  const handleInfoHero = () => {
    console.log('cliquei');
  }

  const renderItem = ({ item }: any) => {
    return (
      <>
        <S.CustomButton onPress={() => handleInfoHero()}>
          <S.BoxHeroContent>
            <S.ImageCustom source={{ uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}} />
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
          value={characterName}
          onChangeText={(text) => setCharacterName(text)}
        />
      </S.ContentHeader>
      <S.BoxSeparatorHeader>
        <S.LabelName>Nome</S.LabelName>
      </S.BoxSeparatorHeader>
      <S.BoxContent>
        <S.FlatListCustom
          data={dataHeros}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          showsVerticalScrollIndicator={false}
       
        />
      </S.BoxContent>
    </S.Container>
  );
}

export default Home;