import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  // Inject service vào constructor để sử dụng
  constructor(private alertMessageService: AlertMessageService) { }

  ngOnInit(): void {
  }

  clickMe() {
    this.alertMessageService.alertMessage('This is first component!');
  }

}
