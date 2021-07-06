import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Calendar } from '@study-smarter/web/shared/data-access/models';
@Component({
  selector: 'study-smarter-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent {
  @Input() day!: string | Calendar.WeekDay;
}
