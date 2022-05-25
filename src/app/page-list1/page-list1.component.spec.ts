import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageList1Component } from './page-list1.component';

describe('PageList1Component', () => {
  let component: PageList1Component;
  let fixture: ComponentFixture<PageList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
