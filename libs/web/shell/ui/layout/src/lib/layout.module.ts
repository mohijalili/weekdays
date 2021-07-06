import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as layoutContainers from './containers';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [...layoutContainers.COMPONENTS],
  declarations: [...layoutContainers.COMPONENTS],
})
export class LayoutModule {}
