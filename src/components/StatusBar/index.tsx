import React from 'react';
import { StatusBar as RnStatusBar } from 'react-native';
// import {
//   useSafeAreaInsets
// } from 'react-native-safe-area-context';
import { IStatusBar } from './Models';
import * as S from './styles';

const StatusBar: React.FC<IStatusBar> = ({ backgroundColor, barStyle }) => {
  // const height = useSafeAreaInsets();
  return (
    <S.Container height={45} backgroundColor={backgroundColor}>
      <RnStatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </S.Container>
  );
};

export default StatusBar;
