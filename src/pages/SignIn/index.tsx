import {ActivityIndicator, Platform} from 'react-native';
import {
  AreaInput,
  Container,
  ContainerForm,
  Image,
  Input,
  Link,
  LinkText,
  SubmitBtn,
  SubmitText,
} from './styles';
import {
  CompositeNavigationProp,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {useContext, useState} from 'react';
import {AuthUser} from '../../context/auth';

interface State {
  email: string;
  password: string;
}

export default function SignIn() {
  const navigate: any = useNavigation();
  const {signIn, loading} = useContext(AuthUser);
  const [state, setState] = useState<State>({
    email: '',
    password: '',
  });
  const {email, password} = state;
  function handleSubmit() {
    signIn(email, password);
  }
  return (
    <Container>
      <ContainerForm
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <Image source={require('../../assets/Logo.png')} />
        <AreaInput>
          <Input
            placeholder="Seu Email"
            value={email}
            onChangeText={text => setState({...state, email: text})}
            keyboardType="email-address"
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Sua Senha"
            value={password}
            onChangeText={text => setState({...state, password: text})}
          />
        </AreaInput>
        <SubmitBtn activeOpacity={0.8} onPress={() => handleSubmit()}>
          {loading ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitBtn>
        <Link onPress={() => navigate.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </ContainerForm>
    </Container>
  );
}
