import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { Wikipedia1Service } from './wikipedia1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: any = [];
  pages1: any = [];
  pages2: any = [];

  constructor(
    private wikipedia: WikipediaService,
    public wikipedia1: WikipediaService,
    public wikipedia2: Wikipedia1Service,
    public wikipediaService: WikipediaService
  ) {}

  onTermY(term: string) {
    this.wikipediaService.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
      console.log(response.toString());
      console.log(this.pages);
    });
  }

  onTermX(term: string) {
    this.wikipediaService.search(term).subscribe((response: any) => {
      this.pages2 = response.query.search;
      console.log(response);
      console.log(response.toString());
    });
  }

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
      console.log(response.toString());
      console.log(this.pages.toString());
    });
  }

  onTerm1(term: string) {
    this.wikipedia1.search(term).subscribe((response: any) => {
      this.pages1 = response.query.search;
      console.log(response);
    });
  }

  onTerm2(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search.size;
      console.log(response);
      console.log(this.pages);
    });
  }
}
