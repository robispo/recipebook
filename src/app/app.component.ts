import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService } from './Services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBSw5PFKwMLQ9Jq17Btz2Uhtslf8fCIUIk',
      authDomain: 'ng-recipebook-32880.firebaseapp.com'
    });
    firebase.auth().onAuthStateChanged(u => {
      if (u) {
        u.getIdToken()
          .then(t => {
            this.authService.setToken(t);
            this.router.navigate(['/']);
          })
          .catch(e => console.log(e));
      }
    });
  }
}
