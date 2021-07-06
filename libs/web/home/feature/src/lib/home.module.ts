import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as homeContainer from './containers';

@NgModule({
  declarations: [...homeContainer.COMPONENTS],
  imports: [
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
