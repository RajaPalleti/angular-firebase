import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  submitted = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService, private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }
  onSubmit() {
    console.log('form status', this.loginForm.status);
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loginService.signin(this.loginForm.value.email, this.loginForm.value.password).then((res: any) => {
        if (res) {
          this.router.navigate(['/layout']);
          this.toastr.success('Logged in Successfully');
        }
      });
    }

  }
}
