import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  fullName = 'Chu Ho Tay';
  age = 18;
  isMarried = true;

  user = {
    username: 'taych',
    email: 'taych@gmail.com',
    role: 1,
  };

  users = [
    {
      id: 1,
      username: 'taych',
      email: 'taych@gmail.com',
      role: 1,
    },
    {
      id: 2,
      username: 'vy',
      email: 'vy@gmail.com',
      role: 2,
    },
    {
      id: 3,
      username: 'y',
      email: 'y@gmail.com',
      role: 2,
    },
  ];

  deleteUser(id: number) {
    const idx = this.users.findIndex((user) => user.id === id);

    if (idx !== -1) {
      this.users.splice(idx, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
