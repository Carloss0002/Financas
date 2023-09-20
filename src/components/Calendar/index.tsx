import {TouchableWithoutFeedback, View} from 'react-native';
import {BtnFilter, BtnFilterText, Container, ModalContent} from './style';
import {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

interface Props {
  setVisible: () => void;
  filteredDayMovements: (date: string | Date) => void;
}

type State = {
  Date: Date | string;
  markedDate: any;
};

interface calendar {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

export default function CalendarELement({
  setVisible,
  filteredDayMovements,
}: Props) {
  const [state, setState] = useState<State>({
    Date: new Date(),
    markedDate: {},
  });
  function handleOnDayPress(date: calendar) {
    let markedDay: any = {};
    let dateElement = `${date.day < 10 ? `0${date.day}` : date.day}/${
      date.month < 10 ? `0${date.month}` : date.month
    }/${date.year}`;
    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#FFF',
    };
    setState({...state, markedDate: markedDay, Date: dateElement});
  }
  function filterDate() {
    filteredDayMovements(state.Date);
    setVisible();
  }
  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>
      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={state.markedDate}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#FF0000',
            selectedDayTextColor: '#FFF',
            selectedDayBackgroundColor: '#00adf5',
          }}
        />
        <BtnFilter onPress={filterDate}>
          <BtnFilterText>Filtrar</BtnFilterText>
        </BtnFilter>
      </ModalContent>
    </Container>
  );
}
