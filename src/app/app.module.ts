import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppRouteModule } from './app.route.module';

import { HttpService } from './services/http.service';

import { KeysPipe } from './pipes/keys.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { EmptyTextPipe } from './pipes/empty-text.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    JoinPipe,
    EmptyTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouteModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
