import styled from 'styled-components/native';
import {PropsStyled} from './types';

export const Container = styled.View`
  background-color: #f0f3ff;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const TypeText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View<PropsStyled>`
  flex-direction: row;
  background-color: ${({tipo}) => (tipo === 'despesa' ? '#c62c36' : '#049301')};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
  margin-top: 8px;
`;
