import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  @Output() submitted1 = new EventEmitter<string>();

  term = '';
  term1: string = '';

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit1(event: any) {
    event.preventDefault();
    this.submitted1.emit(this.term1);
  }

  onFrormSubmit2(event: any) {
    event.preventDefault();
    this.submitted1.emit(this.term);
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
    //console.log(this.term);
  }
}
