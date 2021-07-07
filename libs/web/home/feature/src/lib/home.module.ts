import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as homeContainer from './containers';

import { WeekModule } from '@study-smarter/web/shell/ui/week';

@NgModule({
  declarations: [...homeContainer.COMPONENTS],
  imports: [
    WeekModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: homeContainer.HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
