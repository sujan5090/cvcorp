import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cvcorp';
  public items: Observable<any[]>;

  constructor(private db: AngularFirestore) {

  }

  ngOnInit() {

    this.items = this.db.collection('/student-table').valueChanges();

    this.items.pipe(map((res) => {
       console.log('the res is ', res);
    }));

  }
}
