/*angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

/*components*/
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { BookComponent } from './components/item/book/book.component';
import { CharacterComponent } from './components/item/character/character.component';
import { HouseComponent } from './components/item/house/house.component';

/*services*/
import { HttpService } from './services/http.service';
import { FiltersComponent } from './components/filters/filters.component';

/*pipes*/
import { KeysPipe } from './pipes/keys.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { EmptyTextPipe } from './pipes/empty-text.pipe';

// const appRoutes: Routes = [
//   { path: '', component: ListComponent },
//   { path: 'books/:page', component: ListComponent },
//   { path: 'characters/:page', component: ListComponent },
//   { path: 'houses/:page', component: ListComponent },
//   { path: 'book/:key', component: ItemComponent },
//   { path: 'character/:key', component: ItemComponent },
//   { path: 'house/:key', component: ItemComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    ItemDetailsComponent,
    BookComponent,
    CharacterComponent,
    HouseComponent,
    FiltersComponent,
    KeysPipe,
    JoinPipe,
    EmptyTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
