import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ROUTES } from './web-shell.routes';

import { LayoutModule } from '@study-smarter/web/shell/ui/layout';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
