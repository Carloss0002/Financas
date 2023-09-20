import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.4);
`;
export const BtnFilter = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #3b3dbf;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const BtnFilterText = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`;

export const ModalContent = styled.View`
  flex: 2;
  justify-content: center;
  background-color: #fff;
  padding: 14px;
`;
