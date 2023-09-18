import {Alert, TouchableWithoutFeedback} from 'react-native';
import {Container, TypeText, Tipo, IconView, ValorText} from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface props {
  item: any;
  deleteItem: (id: string) => void;
}

export default function HistoryList({item, deleteItem}: props) {
  function handleDeleteItem() {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar este registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(item.id),
        },
      ],
    );
  }
  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
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
        <ValorText>R$ {item.value.toFixed(2)}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
