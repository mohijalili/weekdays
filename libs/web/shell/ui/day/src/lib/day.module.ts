import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as dayComponents from './components';
@NgModule({
  imports: [CommonModule],
  declarations: [...dayComponents.COMPONENTS],
  exports: [...dayComponents.COMPONENTS],
})
export class DayModule {}
