import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const BoxButton = styled.View`
  padding: 18px 10px 24px 10px;
`;

export const CustomButton = styled.TouchableOpacity<{ currentPage?: boolean }>`
  border: 1px solid ${({ theme }) => theme.Colors.RED_PRIMARY};
  height: 30px
  width: 30px
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.currentPage ? ({ theme }) => theme.Colors.RED_PRIMARY : ({ theme }) => theme.Colors.WHITE}};
`;

export const LabelPage = styled.Text<{ currentPage?: boolean }>`
  color: ${props => props.currentPage ? ({ theme }) => theme.Colors.WHITE : ({ theme }) => theme.Colors.RED_PRIMARY}};
`;