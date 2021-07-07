import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveDayPipe } from './active-day.pipe';
@NgModule({
  imports: [CommonModule],
  declarations: [ActiveDayPipe],
  exports: [ActiveDayPipe],
})
export class CalendarPipesModule {}
