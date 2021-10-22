import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule.forRoot()],
  declarations: [AppComponent, AccountComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
