import React from 'react';
import { Platform, StatusBar as RnStatusBar } from 'react-native';
import { IStatusBar } from './Models';
import * as S from './styles';

const StatusBar: React.FC<IStatusBar> = ({ backgroundColor, barStyle }) => {
  return (
    <S.Container height={Platform.OS === 'ios' ? 45 : 0} backgroundColor={backgroundColor}>
      <RnStatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </S.Container>
  );
};

export default StatusBar;
