import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBSw5PFKwMLQ9Jq17Btz2Uhtslf8fCIUIk',
      authDomain: 'ng-recipebook-32880.firebaseapp.com'
    });
  }
}
