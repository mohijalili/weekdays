import { Routes } from '@angular/router';
import { LayoutComponent } from '@study-smarter/web/shell/ui/layout';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/app/calendar',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'calendar',
        loadChildren: async () =>
          (await import('@study-smarter/web/home/feature')).HomeModule,
      },
    ],
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];
