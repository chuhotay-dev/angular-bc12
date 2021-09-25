import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(12),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmitForm() {
    console.log(this.myForm.value);
    console.log(this.myForm.controls);
    console.log(this.myForm.valid);
  }
}
