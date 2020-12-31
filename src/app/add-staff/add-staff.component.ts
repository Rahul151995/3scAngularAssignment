import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  form: FormGroup;
  isFormSubmit: boolean;
  constructor(private api: ApiService,
    private toastrService: ToastService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required])
    })
  }

  formSubmit(f: any) {
    if (f.invalid) {
      this.isFormSubmit = true;
      return
    }
    this.api.addStaff(f.value).subscribe((res: any) => {
      this.toastrService.success('Staff added Successfully');
      this.router.navigateByUrl("/staff-list");
    }, err => {
      this.toastrService.error('Staff Insertion Failed');
    })
  }

  get f() {
    return this.form.controls;
  }
}
