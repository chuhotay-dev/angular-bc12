import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  fullName: string = 'Chu Ho Tay';
  age: number = 18;
  isMarried: boolean = true;
  imgSrc: string = 'https://upload.wikimedia.org/wikipedia/vi/e/e0/Iron_Man_bleeding_edge.jpg';
  isDisabled: boolean = true;
  email: string = '';

  person = {
    fullName: 'Chu Ho Tay',
    age: 18,
    isMarried: true,
  }

  showInfo() {
    return `Họ tên: ${this.fullName}`;
  }

  clickMe() {
    alert('Clicked!');
  }

  getEmail(event: any) {
    // console.log(event.target.value);
    this.email = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
