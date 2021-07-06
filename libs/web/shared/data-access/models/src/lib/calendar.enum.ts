export enum WeekDay {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

export const WeekDays = (): string[] => {
  const days: string[] = [];
  for (const item in WeekDay) {
    if (isNaN(Number(item))) {
      days.push(item);
    }
  }
  return days;
};
