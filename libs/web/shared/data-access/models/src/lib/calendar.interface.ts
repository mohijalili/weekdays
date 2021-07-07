import { WeekDay } from './calendar.enum';

export const getWeekDay = (date: Date) => {
  const day = date.getDay();
  return WeekDay[day];
};
