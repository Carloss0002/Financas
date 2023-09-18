import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4ff;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
  color: #000;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px;
  color: #121212;
  font-weight: 900;
`;

export const NewLink = styled.TouchableOpacity`
  background-color: #3b3db3;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: #c62c36;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #c62c36;
`;
