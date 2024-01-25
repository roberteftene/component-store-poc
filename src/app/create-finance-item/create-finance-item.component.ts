import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewFinanceItem} from "../models/finance-item.model";

@Component({
  selector: 'app-create-finance-item',
  templateUrl: './create-finance-item.component.html',
  styleUrls: ['./create-finance-item.component.scss']
})
export class CreateFinanceItemComponent implements OnInit {
  @Output() submitNewItemEvent: EventEmitter<NewFinanceItem> = new EventEmitter<NewFinanceItem>();
  formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      amountPaid: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.submitNewItemEvent.emit(this.formGroup.value);
      this.formGroup.reset();
    }
  }

}
