import { Pipe, PipeTransform } from '@angular/core';

import { ICalendar } from '@study-smarter/web/shared/data-access/models';

@Pipe({
  name: 'activeDay',
  pure: true,
})
export class ActiveDayPipe implements PipeTransform {
  transform(value: string): boolean {
    return value === this.weekName ? true : false;
  }

  get weekName() {
    const date = new Date();

    const weekDay = ICalendar.getWeekDay(date);
    return weekDay;
  }
}
