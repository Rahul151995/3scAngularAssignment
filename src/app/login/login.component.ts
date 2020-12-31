import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  formSubmit(f: any) {
    if (f.invalid) {
      this.isFormSubmit = true;
      return
    }
    this.api.login(f.value).subscribe((res: any) => {
      this.toastrService.success('Login Successfully');
      console.log(res)
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl("/staff-list");
    }, err => {
      this.toastrService.error('Login Failed');
    })
  }

  get f() {
    return this.form.controls;
  }

}
