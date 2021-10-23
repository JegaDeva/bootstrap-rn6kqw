import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule.forRoot()],
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
