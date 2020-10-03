import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase';
  items: Observable<any[]>;
  isLoggedIn = false;
  constructor(firestore: AngularFirestore, private loginService: LoginService) {
    this.items = firestore.collection('items').valueChanges();
    console.log('this.items', this.items);
  }
  ngOnInit() {
    if (localStorage.getItem('user') != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
  signup(email, password) {
    alert();
    this.loginService.signup(email, password);
    if (this.loginService.isLoggedIn) {
      this.isLoggedIn = true;
    }
  }
  signin(email, password) {
    this.loginService.signin(email, password);
    if (this.loginService.isLoggedIn) {
      this.isLoggedIn = true;
    }
  }
}
