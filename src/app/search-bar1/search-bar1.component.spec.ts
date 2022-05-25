import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBar1Component } from './search-bar1.component';

describe('SearchBar1Component', () => {
  let component: SearchBar1Component;
  let fixture: ComponentFixture<SearchBar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
