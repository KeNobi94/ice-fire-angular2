import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { ItemComponent } from './components/item/item.component';
// import { ItemDetailsComponent } from './components/item-details/item-details.component';
// import { BookComponent } from './components/item/book/book.component';
// import { CharacterComponent } from './components/item/character/character.component';
// import { HouseComponent } from './components/item/house/house.component';
import { ListPageComponent } from './components/list-page/list-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: ListPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    // ItemComponent,
    // ItemDetailsComponent,
    // BookComponent,
    // CharacterComponent,
    // HouseComponent,
    ListPageComponent
  ]
})
export class AppRouteModule { }
