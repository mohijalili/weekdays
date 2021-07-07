import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as weekComponents from './components';

import { DayModule } from '@study-smarter/web/shell/ui/day';

import { SortPipesModule } from '@study-smarter/web/shared/pipes/sort-pipes';

import { CalendarPipesModule } from '@study-smarter/web/shared/pipes/calendar-pipes';
@NgModule({
  imports: [CommonModule, DayModule, SortPipesModule, CalendarPipesModule],
  declarations: [...weekComponents.COMPONENTS],
  exports: [...weekComponents.COMPONENTS],
})
export class WeekModule {}
