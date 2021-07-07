import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as weekComponents from './components';

import { DayModule } from '@study-smarter/web/shell/ui/day';
@NgModule({
  imports: [CommonModule, DayModule],
  declarations: [...weekComponents.COMPONENTS],
  exports: [...weekComponents.COMPONENTS],
})
export class WeekModule {}
