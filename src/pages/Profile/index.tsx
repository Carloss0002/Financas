import {useContext} from 'react';
import {
  Container,
  LogoutButton,
  LogoutText,
  Message,
  Name,
  NewLink,
  NewText,
} from './styled';
import {AuthUser} from '../../context/auth';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const {user, signOut} = useContext(AuthUser);
  const navigate: any = useNavigation();
  return (
    <Container>
      <Header title="Meu Perfil" />
      <Message>Hey, bem vindo de volta!</Message>
      <Name numberOfLines={1}>{user?.name}</Name>
      <NewLink onPress={() => navigate.navigate('registro')}>
        <NewText>Fazer Registro</NewText>
      </NewLink>
      <LogoutButton onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  );
}
