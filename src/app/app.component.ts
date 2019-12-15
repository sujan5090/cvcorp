import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: 'AIzaSyA3oyMpyl-YvVAhLfjEYCnd9dEovmvbpac',
  authDomain: 'cvcorp-d1b70.firebaseapp.com',
  databaseURL: 'https://cvcorp-d1b70.firebaseio.com',
  projectId: 'cvcorp-d1b70',
  storageBucket: 'cvcorp-d1b70.appspot.com',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cvcorp';

  constructor() {

  }

  ngOnInit() {
    firebase.initializeApp(config);
    // firebase.firestore().settings(settings);

  }
}
