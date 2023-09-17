import {
  Alert,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../../components/Header';
import {Container} from '../SignIn/styles';
import {
  ContainerRegister,
  Input,
  RegisterBtn,
  RegisterText,
  SubmitBtn,
  SubmitText,
  Title,
} from './styles';
import {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {userControler} from '../../services/axios';
import {format} from 'date-fns';

type State = {
  description: string;
  value: string;
  type: string;
};

function Register() {
  const [state, setState] = useState<State>({
    description: '',
    value: '',
    type: 'receita',
  });
  const {description, value, type} = state;
  function changeType(type: string) {
    setState({...state, type: type});
  }
  function handleSubmit() {
    Keyboard.dismiss();

    if (isNaN(parseFloat(state.value)) || type === null) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${
        type[0].toUpperCase() + type.substring(1)
      } - Valor: R$ ${parseFloat(value)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd(),
        },
      ],
    );
  }

  async function handleAdd() {
    Keyboard.dismiss();
    const formatValue = value.replace(/,/g, '.');
    await userControler
      .setRegister({
        description,
        value: Number(formatValue),
        type,
        date: format(new Date(), 'dd/MM/yyyy'),
      })
      .then(() => {
        console.log('foi');
      })
      .catch((err: Error) => {
        console.log(err.message);
      })
      .finally(() => {
        setState({description: '', type: 'receita', value: ''});
      });
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header title="Registrando" />
        <Title>Registrar</Title>
        <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
          <Input
            placeholder="Descrição desse registro"
            value={description}
            onChangeText={text => setState({...state, description: text})}
          />
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={value}
            onChangeText={text => setState({...state, value: text})}
          />
          <ContainerRegister>
            <RegisterBtn
              type={type === 'receita'}
              onPress={() => changeType('receita')}>
              <Feather name="arrow-up" size={25} color="#121212" />
              <RegisterText>Receita</RegisterText>
            </RegisterBtn>
            <RegisterBtn
              type={type === 'despesa'}
              onPress={() => changeType('despesa')}>
              <Feather name="arrow-down" size={25} color="#121212" />
              <RegisterText>Despesa</RegisterText>
            </RegisterBtn>
          </ContainerRegister>
          <SubmitBtn onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitBtn>
        </SafeAreaView>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Register;
