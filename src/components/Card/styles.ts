import styled from 'styled-components/native';
import {propsStyles} from './interface';

export const Container = styled.View<propsStyles>`
  background-color: ${({color}) => color};
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`;

export const Balance = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #fff;
`;
