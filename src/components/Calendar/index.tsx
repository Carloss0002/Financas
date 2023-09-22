import {TouchableWithoutFeedback, View} from 'react-native';
import {BtnFilter, BtnFilterText, Container, ModalContent} from './style';
import {Props, State, calendar} from './types'
import {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {ptBr} from './localeCalendar'
import { format } from 'date-fns';

LocaleConfig.locales.ptBR = ptBr

LocaleConfig.defaultLocale = "ptBR";
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
    let dateEl = new Date(date.dateString)
    let onlyDate = dateEl.valueOf() + dateEl.getTimezoneOffset() * 60 * 1000
    let dateElement = format(onlyDate, 'dd/MM/yyyy') 
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
