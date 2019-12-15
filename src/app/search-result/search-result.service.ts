import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
// import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  ref = firebase.firestore().collection('student-table');

  constructor() { }



  getCsvFile() {

  }

  getBoards() {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let boards = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          boards.push({
            key: doc.id,
            title: data.title,
            description: data.description,
            author: data.author
          });
        });
        observer.next(boards);
      });
    });
  }
}
