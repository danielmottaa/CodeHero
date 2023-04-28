import { ImageBackground, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
flex: 1;
  background-color: ${({ theme }) => theme.Colors.WHITE};
`;

export const BoxImage = styled.View``;

export const CustomImage = styled(ImageBackground)`
  max-height: 70%;
`;

export const CustomLinearGradient = styled(LinearGradient)`
  height: 70%;
  padding-top: 100px; 
  padding-left: 20px;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const BoxName = styled.View`
  width: 90%;
  height: 70px;
  justify-content: center;
  align-items: center;
  margin: 20px auto 20px auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.ORANGE_MARVEL};
`;

export const LabelName = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.RED_PRIMARY};
`;

export const BoxDescription = styled.View`
  border: 0.3px;
  margin: 0 20px 20px 20px;
  padding: 20px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.Colors.DIM_GRAY};
  background-color: ${({ theme }) => theme.Colors.GHOST_WHITE};

`;

export const LabelDescription = styled.Text`
  font-size: 15px;
  text-align: justify;
  color: ${({ theme }) => theme.Colors.BLACK};
`;