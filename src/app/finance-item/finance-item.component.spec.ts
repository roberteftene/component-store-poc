import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceItemComponent } from './finance-item.component';

describe('FinanceItemComponent', () => {
  let component: FinanceItemComponent;
  let fixture: ComponentFixture<FinanceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
