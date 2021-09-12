import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input('fullName') myFullName: string;
  @Input('age') myAge: number;
  @Input('isMarried') isMarried: boolean;
  @Input('user') user: {
    username: string;
    email: string;
    role: number;
  };
  @Input('users') users: {
    id: number;
    username: string;
    email: string;
    role: number;
  }[];

  @Output('deleteUser') onDeleteUser = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.myFullName);
  }

  deleteUser(id: number) {
    this.onDeleteUser.emit(id);
  }
}
