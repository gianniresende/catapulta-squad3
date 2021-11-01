import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.primary.main};
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary.onMain};
  font-size: 30px;
`;
