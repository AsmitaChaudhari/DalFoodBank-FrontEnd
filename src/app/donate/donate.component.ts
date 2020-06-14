import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { dialogbox } from './dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  loading = false;
  submitted = false;
  donationform: FormGroup;

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.donationform = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      amount: ['', [Validators.required]],
    });
  }

  get f() {
    return this.donationform.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.donationform.invalid) {
      return;
    }

    this.loading = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(dialogbox);
  }
}
