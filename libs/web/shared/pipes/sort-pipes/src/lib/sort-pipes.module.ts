import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortByPipe } from './sort-by.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SortByPipe],
  exports: [SortByPipe],
})
export class SortPipesModule {}
