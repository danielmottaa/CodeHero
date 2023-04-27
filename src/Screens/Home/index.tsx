import React, { useState } from 'react';
import { useFonts, Roboto_300Light, Roboto_900Black } from '@expo-google-fonts/roboto';
import StatusBar from '../../components/StatusBar';
import Colors from '../../global/colors';
import * as S from './styles';
import Input from '../../components/Input';

const Home: React.FC = () => {

  const [characterName, setCharacterName] = useState('');

  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_900Black,
  });
  if (!fontLoaded)
    return null;

    const handleInfoHero = () => {
      console.log('cliquei');
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
        <S.CustomButton onPress={() => handleInfoHero()}>
          <S.BoxHeroContent>
            <S.ImageCustom source={{ uri: 'https://i.em.com.br/mvwul22IjEMwZJFgWx8GppIMtoc=/1200x720/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/12/16/1331553/tom-holland-como-o-homem-aranha-tem-imensas-patas-nas-costas_1_79335.jpg' }} />
            <S.LabelHeroName numberOfLines={1}>Peter Parker</S.LabelHeroName>
          </S.BoxHeroContent>
        </S.CustomButton>
        <S.LineSeparatorHero />
      </S.BoxContent>
    </S.Container>
  );
}

export default Home;