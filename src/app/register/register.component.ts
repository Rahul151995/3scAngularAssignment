import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  formSubmit(f: any) {
    if (f.invalid) {
      this.isFormSubmit = true;
      return
    }
    console.log("f", f.value)
    this.api.register(f.value).subscribe((res: any) => {
      this.toastrService.success('Registration Successfully');
      this.router.navigateByUrl("/login");
    }, err => {
      this.toastrService.error('Registration Failed');
    })
  }

  get f() {
    return this.form.controls;
  }

}
