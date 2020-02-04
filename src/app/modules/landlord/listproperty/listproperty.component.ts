import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-listproperty',
  templateUrl: './listproperty.component.html',
  styleUrls: ['./listproperty.component.css']
})
export class ListpropertyComponent implements OnInit {

  name;
  email;
  phone;
  constructor(private afs: AngularFirestore,
              private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const uid = this.activatedRoute.snapshot.params['id'];
    this.getCurrentUser(uid);
  }

  getCurrentUser(uid) {
    console.log("The user id is" + uid)
    this.afs
      .doc<User>(`users/${uid}`)
      .valueChanges()
      .subscribe(user => {
       this.name = user.name;
       this.email = user.email;
       this.phone = user.phone;
      });
  }
}
