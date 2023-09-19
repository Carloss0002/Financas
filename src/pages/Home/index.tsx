import {useContext, useEffect, useState} from 'react';
import {Container} from '../SignIn/styles';
import Header from '../../components/Header';
import {UserMovements, receives} from '../../models/User';
import {format} from 'date-fns';
import {userControler} from '../../services/axios';
import {useIsFocused} from '@react-navigation/native';
import {Area, Btn, List, ListBalance, Title} from './styles';
import BalanceCard from '../../components/Card';
import Icons from 'react-native-vector-icons/MaterialIcons';
import HistoryList from '../../components/HistoricCard';
import { Modal } from 'react-native';
import Calendar from '../../components/Calendar';

type State = {
  balance: UserMovements[] | object[];
  date: number | Date;
  receives: receives[] | object[];
  showModal: boolean
};

export default function Home() {
  const isFocused = useIsFocused();
  const [state, setState] = useState<State>({
    balance: [],
    date: new Date(),
    receives: [],
    showModal: false
  });
  useEffect(() => {
    let isActive = true;
    async function getMovements() {
      let dateFormat = format(state.date, 'dd/MM/yyyy');
      const [movements, receives] = await Promise.all([
        userControler.getMovementsUser(dateFormat),
        userControler.getReceives(dateFormat),
      ]);
      if (isActive) {
        setState({...state, balance: movements.data, receives: receives.data});
      }
    }
    getMovements();
    return () => {
      isActive = false;
    };
  }, [isFocused, state.date]);
  async function handleDelete(id:string){
    try {
      await userControler.DeleteItem(id)
      setState({...state, date: new Date()})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Header title="Minhas Movimentações" />
      <ListBalance
        data={state.balance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => <BalanceCard Item={item} />}
      />
      <Area>
        <Btn onPress={() => setState({...state, showModal: true})}>
          <Icons name="event" color="#121212" size={30} />
          <Title>Últimas movimentações</Title>
        </Btn>
      </Area>
      <List
        data={state.receives}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}) => <HistoryList item={item} deleteItem={handleDelete}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />
      <Modal
        visible={state.showModal}
        animationType='fade'
        transparent={true}
      >
        <Calendar/>
      </Modal>
    </Container>
  );
}
