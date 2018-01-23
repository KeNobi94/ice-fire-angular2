import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListComponent,
    FiltersComponent
  ]
})
export class ListPageModule { }
