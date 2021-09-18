import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  constructor() { }

  alertMessage(message: string) {
    alert(message);
  }
}
