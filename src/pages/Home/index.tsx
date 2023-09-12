import {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthUser} from '../../context/auth';
import { Container } from '../SignIn/styles'
import Header from '../../components/Header';

export default function Home() {
  const {signOut, user} = useContext(AuthUser);
  return (
    <Container>
      <Header title='Minhas Movimentações'/>
    </Container>
  )
}