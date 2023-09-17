import {Container, TypeText, Tipo, IconView, ValorText} from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface props {
  item: any;
}

export default function HistoryList({item}: props) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={item.type}>
          <Icon
            name={item.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
            size={20}
            color="#FFF"
          />
          <TypeText>{item.type}</TypeText>
        </IconView>
      </Tipo>
      <ValorText>R$ {item.value}</ValorText>
    </Container>
  );
}
