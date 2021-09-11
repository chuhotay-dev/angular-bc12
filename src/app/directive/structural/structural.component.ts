import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
  title: string = 'Structural Directive';
  isLoggedIn: boolean = false;
  username: string = 'taych';
  age: number = 0;
  rappers: string[] = ['Đen Vâu', 'Binz', 'Karik', 'Wowy', 'MCK'];
  students: { id: string; name: string; className: string }[] = [];
  selectedColor: string = 'black';

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  addStudent(id: string, name: string, className: string) {
    // console.log(id, name, className);
    this.students.push({
      id,
      name,
      className,
    });
    console.log(this.students);
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  constructor() {}

  ngOnInit(): void {}
}
