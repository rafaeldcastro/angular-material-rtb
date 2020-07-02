import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { states } from './example-data';
import { ToastService } from './../../../services/toast/toast.service';

@Component({
  selector: 'mat-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = states;

  constructor(private fb: FormBuilder, private toast: ToastService) {}

  onSubmit() {
    this.toast.success('Thank you');
  }
}
