import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  submitted = false;
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    if(this.registerForm.valid) {
      this.loginService.signup(this.registerForm.value.email, this.registerForm.value.password);
      this.router.navigate(['/layout']);
    }
    console.log('registerForm', this.registerForm.value);
  }
}
