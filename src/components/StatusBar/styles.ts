import styled from 'styled-components/native';

interface ContainerProps {
  backgroundColor: string;
  height: number;
}

export const Container = styled.View<ContainerProps>`
  height: ${props => props.height}px;
  backgroundcolor: ${props => props.backgroundColor};
`;
