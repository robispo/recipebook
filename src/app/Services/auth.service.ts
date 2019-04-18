import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string;
  constructor() {}

  singUp(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(e => console.log(e));
  }

  async singIn(credentials: { email: string; password: string }) {
    return await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(r => this.getToken());
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then(t => (this.token = t))
      .catch(e => (this.token = null));

    return this.token;
  }

  isAuthenticated() {
    return !!this.token;
  }
}
