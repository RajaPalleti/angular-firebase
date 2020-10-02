import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() isLogOut = new EventEmitter;
  constructor(private loginService: LoginService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  signOut() {
    this.loginService.signout();
    this.router.navigate(['/login']);
    this.toastr.success('Logout Successfully');
  }
}
