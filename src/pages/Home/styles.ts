import styled from 'styled-components/native';

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  margin-top: 24px;
  align-items: stretch;
`;

export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: start;
  padding-top: 10px;
`;

export const Title = styled.Text`
  margin-left: 4px;
  color: #121212;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 20px;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: #fff;
`;
