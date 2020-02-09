import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Payments } from 'src/app/models/rentpayments.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments: Payments[];
  uid: any
  constructor(private afs: AngularFirestore, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.uid = this.activatedRoute.snapshot.params['id'];
    this.getMyPayments(this.uid);
  }

  getMyPayments(uid) {
    this.afs.collection('rentpayments', ref => ref.where('landlordId', '==', uid)).snapshotChanges().subscribe(payment => {
      this.payments = payment.map(item => {
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Payments;
      });
    });
  }
 

}
