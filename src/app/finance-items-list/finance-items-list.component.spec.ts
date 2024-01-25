import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceItemsListComponent } from './finance-items-list.component';

describe('FinanceItemsListComponent', () => {
  let component: FinanceItemsListComponent;
  let fixture: ComponentFixture<FinanceItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceItemsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
