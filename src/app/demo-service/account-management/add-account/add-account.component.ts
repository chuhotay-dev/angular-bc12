import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  addAccount(account: any) {
    this.accountService.addAccount(account);
  }
}
