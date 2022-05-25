import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
const observable = new Observable<number>((observer) => {
  observer.next(1);
});

observable.subscribe((value) => {
  console.log(value);
});
//////////////////////////////////////////////////////////////////////////////////
const observable1 = new Observable<number>((observer) => {
  observer.next(1000);
});

observable1.subscribe((params) => {
  console.log(params);
});
*/
///////////////////////////////////////////////////////////////////////////////////

interface X {
  params: {
    action: string;
    format: string;
    list: string;
    utf8: string;
    srsearch: any;
    origin: string;
  };
}
interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

interface Y {
  urls: {
    params: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient, private http1: HttpClient) {}

  searchY(term: string) {
    return this.http.get<Y>('htpp', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }

  search(term: string) {
    return this.http.get<X>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }

  public search1(term: string) {
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }
}
