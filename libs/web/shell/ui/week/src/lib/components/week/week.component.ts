import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Calendar } from '@study-smarter/web/shared/data-access/models';

@Component({
  selector: 'study-smarter-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekComponent {
  get startDate(): number {
    return Calendar.WeekDay.Mon;
  }

  get weekDays() {
    const days = Calendar.WeekDays();
    return days;
  }
}
