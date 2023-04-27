import styled from 'styled-components/native';

export const Container = styled.View``;

export const InputCustom = styled.TextInput`
  border: 1px;
  height: 30px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.Colors.DIM_GRAY};
  margin-top: 3px;
  padding: 4px;
  color: ${({ theme }) => theme.Colors.GRAY_21};
`;
