import React from 'react';
import Colors from '../../global/colors';
import { IInput } from './Models/indext';

import * as S from './styles';

const Input: React.FC<IInput> = ({
  placeholder,
  value,
  onChangeText
}) => {
  return (
    <S.Container>
      <S.InputCustom
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.DIM_GRAY}
      />
    </S.Container>
  );
}

export default Input;