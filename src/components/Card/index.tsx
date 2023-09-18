import {Balance, Container, Label} from './styles';
import {useMemo} from 'react';
import {props} from './interface';

export default function BalanceCard({Item}: props) {
  const labelName = useMemo(() => {
    if (Item.tag === 'saldo') {
      return {
        label: 'Saldo Atual',
        color: '#3b3dbf',
      };
    } else if (Item.tag === 'receita') {
      return {
        label: 'Entrada de Hoje',
        color: '#00b94a',
      };
    } else {
      return {
        label: 'Saídas de Hoje',
        color: '#EF463a',
      };
    }
  }, [Item]);
  return (
    <Container color={labelName.color}>
      <Label> {labelName.label} </Label>
      <Balance>R$ {Item.saldo.toFixed(2)}</Balance>
    </Container>
  );
}