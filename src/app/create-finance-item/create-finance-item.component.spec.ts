import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinanceItemComponent } from './create-finance-item.component';

describe('CreateFinanceItemComponent', () => {
  let component: CreateFinanceItemComponent;
  let fixture: ComponentFixture<CreateFinanceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFinanceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFinanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
