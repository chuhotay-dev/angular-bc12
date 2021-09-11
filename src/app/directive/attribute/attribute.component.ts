import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent implements OnInit {
  title: string = 'Attribute Directive';
  isTextRed: boolean = false;
  isBackgroundGreen: boolean = true;
  isTextAqua: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
