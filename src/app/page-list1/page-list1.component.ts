import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list1',
  templateUrl: './page-list1.component.html',
  styleUrls: ['./page-list1.component.css'],
})
export class PageList1Component implements OnInit {
  @Input() pages = '';

  constructor() {}

  ngOnInit(): void {}
}
