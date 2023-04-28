import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
flex: 1;
  background-color: ${({ theme }) => theme.Colors.WHITE};
`;

export const ContentHeader = styled.View`
  margin: 12px 40px 0 40px;
`;

export const LabelTilePage = styled.Text`
  color: ${({ theme }) => theme.Colors.RED_PRIMARY};
  font-size: 16px;
  font-family: 'Roboto_900Black';
`;

export const SpanTextTitlePage = styled.Text`
    color: ${({ theme }) => theme.Colors.RED_PRIMARY};
    font-size: 16px;
    font-family: 'Roboto_300Light';
`;

export const LineSeparator = styled.View`
    width: 16%;
    margin-top: 5px;
    border: 2px solid ${({ theme }) => theme.Colors.RED_PRIMARY};
`;

export const LabelCharacterName = styled.Text`
  margin-top: 12px;
  color: ${({ theme }) => theme.Colors.RED_PRIMARY};
`;

export const BoxSeparatorHeader = styled.View`
  margin-top: 12px;
  height: 38px;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.RED_PRIMARY};
`;

export const LabelName = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE}
  margin-left: 26.5%;
  font-size: 16px;
  font-weight: 500;
`;

export const BoxContent = styled.View``;

export const CustomButton = styled.TouchableOpacity``;

export const BoxHeroContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 18px;
`;

export const ImageCustom = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

export const LabelHeroName = styled.Text`
  color: ${({ theme }) => theme.Colors.GRAY_21};
  flex: 1;
  margin-left: 20px;
`;

export const LineSeparatorHero = styled.View`
  border: 0.5px solid ${({ theme }) => theme.Colors.RED_PRIMARY};
`;

export const FlatListCustom = styled(FlatList)``;

export const BoxEmptySearch = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LabelEmptySearch = styled.Text`
  color: ${({ theme }) => theme.Colors.GRAY_21};
  font-weight: bold;
  font-size: 20px;
`;

export const LoadingCustom = styled(ActivityIndicator)`
margin-top: 100%;
`;