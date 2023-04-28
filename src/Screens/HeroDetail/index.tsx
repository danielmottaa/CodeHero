import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';
import Colors from '../../global/colors';
import { styles } from '../../global/styles';

const HeroDetail: React.FC = () => {

  const { goBack }: any = useNavigation();
  const route = useRoute();
  const item: any = route.params;
  return (
    <S.Container>
      <S.CustomImage
        source={{ uri: `${item.item?.thumbnail.path}.${item.item?.thumbnail.extension}` }}
        resizeMode='stretch'
      >
        <S.CustomLinearGradient colors={['rgba(0,0,0,0.75)', 'transparent']}>
          <S.ButtonGoBack onPress={() => goBack()}>
            <AntDesign name="leftcircleo" size={24} color={Colors.WHITE} />
          </S.ButtonGoBack>
        </S.CustomLinearGradient>
      </S.CustomImage>
      <S.BoxName style={styles.boxShadow}>
        <S.LabelName>{item.item?.name}</S.LabelName>
      </S.BoxName>
      <S.BoxDescription>
        <S.LabelDescription>{!item.item?.description ? 'Descrição não encontrada' : item.item?.description}</S.LabelDescription>
      </S.BoxDescription>
    </S.Container>
  );
}

export default HeroDetail;