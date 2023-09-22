export interface Props {
  setVisible: () => void;
  filteredDayMovements: (date: string | Date) => void;
};

export type State = {
  Date: Date | string;
  markedDate: any;
};

export interface calendar {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};
