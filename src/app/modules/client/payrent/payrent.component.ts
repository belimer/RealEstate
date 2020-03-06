import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-payrent',
  templateUrl: './payrent.component.html',
  styleUrls: ['./payrent.component.css']
})
export class PayrentComponent implements OnInit {
  phone
  constructor(private activatedRoute: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {
    this.getCurrentUser();
  }

 getCurrentUser() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.afs
      .doc<User>(`users/${id }`)
      .valueChanges()
      .subscribe(user => {
       this.phone = user.phone
      });
  }

}
