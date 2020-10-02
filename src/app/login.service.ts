import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  constructor(private fireAuth: AngularFireAuth) {
  }
  async signin(email: string, password: string) {
    await this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      })
  }
  async signup(email: string, password: string) {
    await this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      })
  }
  signout() {
    this.fireAuth.signOut();
    localStorage.removeItem('user');
  }
}

