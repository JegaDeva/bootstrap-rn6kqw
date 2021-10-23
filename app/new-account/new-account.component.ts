import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  OnCreateAccount(accountName: string, accountstatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountstatus,
    });
  }
}
