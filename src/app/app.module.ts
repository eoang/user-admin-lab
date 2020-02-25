import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserControlerComponent } from './users/user-controler/user-controler.component';
import { UserContainerComponent } from './users/user-container/user-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserControlerComponent,
    UserContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
