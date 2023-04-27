import React from 'react';
import { StatusBar as RnStatusBar } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import * as S from './styles';

interface Props {
  backgroundColor: string;
  barStyle?: 'dark-content' | 'light-content';
}

const StatusBar: React.FC<Props> = ({ backgroundColor, barStyle }) => {
  const height = useSafeAreaInsets();

  return (
    <S.Container height={height.top} backgroundColor={backgroundColor}>
      <RnStatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </S.Container>
  );
};

export default StatusBar;
