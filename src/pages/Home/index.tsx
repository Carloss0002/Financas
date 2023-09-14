import {useContext, useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthUser} from '../../context/auth';
import {Container} from '../SignIn/styles';
import Header from '../../components/Header';
import {UserMovements} from '../../models/User';
import {format} from 'date-fns';
import {userControler} from '../../services/axios';
import {useIsFocused} from '@react-navigation/native';
import {ListBalance} from './styles';
import BalaceCard from '../../components/Card';

type State = {
  balance: UserMovements[] | object[];
  date: number | Date;
};

export default function Home() {
  const isFocused = useIsFocused();
  const [state, setState] = useState<State>({
    balance: [],
    date: new Date(),
  });
  useEffect(() => {
    let isActive = true;
    async function getMovements() {
      let dateFormat = format(state.date, 'dd/MM/yyyy');

      await userControler
        .getMovementsUser(dateFormat)
        .then(response => {
          if (isActive) {
            setState({...state, balance: response.data});
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    getMovements();
    return () => {
      isActive = false;
    };
  }, [isFocused]);
  return (
    <Container>
      <Header title="Minhas Movimentações" />
      <ListBalance
        data={state.balance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => <BalaceCard Item={item} />}
      />
    </Container>
  );
}
