import styled from 'styled-components/native';

export const Container = styled.View``;

export const InputCustom = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.Colors?.DIM_GRAY};
  height: 30px;
  border-radius: 5px;
  margin-top: 3px;
  padding: 4px;
`;
