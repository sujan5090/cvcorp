import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { StudentData } from '../app.interface';
// import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  ref = firebase.firestore().collection('student-table');

  constructor() { }



  getCsvFile() {

  }

  getBoards(): Observable<any[]> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        const students: StudentData[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(' the doc ', data);
          students.push({
            key: doc.id,
            tenthmarks:  data['10thMarks'],
            batch: data.batch,
            branch: data.branch,
            btechMarks: data.btechMarks,
            collegeName: data.collegeName,
            email: data.email,
            gender: data.gender,
            interMarks: data.interMarks,
            name: data.name,
            phoneNo: data['phone-no'],
            placementReady: data.placementReady,
            status: data.status,
            yearOfPassout: data.yearOfPassout
          });
        });
        observer.next(students);
      });
    });
  }
}
