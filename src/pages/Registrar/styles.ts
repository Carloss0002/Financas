import styled from 'styled-components/native';

export const Title = styled.Text`
  margin-left: 20px;
  font-size: 26px;
  font-weight: 900;
  color: #000;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: #fff;
  font-size: 17px;
  padding: 0 8px;
  margin-bottom: 14px;
  border-radius: 4px;
`;

export const SubmitBtn = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 4px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 21px;
  font-weight: bold;
`;

export const ContainerRegister = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

interface BtnProps {
  type: boolean;
}

export const RegisterBtn = styled.TouchableOpacity<BtnProps>`
  background-color: ${({type}) => (type ? '#FFF' : '#E7E7E7')};
  width: 47%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 45px;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${({type}) => (type ? '#3B3DBF' : 'transparent')};
  margin-bottom: 14px;
`;

export const RegisterText = styled.Text`
  margin-left: 8px;
  font-size: 17px;
  color: #000;
`;
