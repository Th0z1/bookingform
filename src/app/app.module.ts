import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './component/page1/page1.component';

import { ViewComponent } from './component/view/view.component';
import {AppRoutes} from '../app.route.module';
import { DetailpageComponent } from './component/detailpage/detailpage.component';
import { EventComponent } from './component/event/event.component';
import { NavbarComponent } from './component/navbar/navbar.component'
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
   
    ViewComponent,
    DetailpageComponent,
    EventComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
