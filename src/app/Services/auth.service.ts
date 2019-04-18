import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  singUp(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(e => console.log(e));
  }

  singIn(credentials: { email: string; password: string }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }
}
