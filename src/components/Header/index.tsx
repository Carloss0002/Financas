import {useNavigation} from '@react-navigation/native';
import {ButtonMenu, Container, Title} from './styles';
import Icon from 'react-native-vector-icons/Feather';

type props = {
  title: string;
};

export default function Header({title}: props) {
  const navigation: any = useNavigation();
  return (
    <Container>
      <ButtonMenu onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={30} color="#121212" />
      </ButtonMenu>
      <Title>{title}</Title>
    </Container>
  );
}
