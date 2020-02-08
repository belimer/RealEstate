import { Component, OnInit } from '@angular/core';
import { Rent } from 'src/app/models/rent.model';
import { User } from 'src/app/models/user.model';
import { Property } from 'src/app/models/property.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-landlorddetails',
  templateUrl: './landlorddetails.component.html',
  styleUrls: ['./landlorddetails.component.css']
})
export class LandlorddetailsComponent implements OnInit {

 
  uid: any
  name: any
  email: any
  phone: any
  propertyId: any

  propName: any
  propCounty: any
  propTown: any
  propLocation: any
  propRent: any
  propId: any

  receivePaymentForm:FormGroup
  rents: Rent[]

  constructor(private activatedRoute: ActivatedRoute, 
              private authService: AuthenticationService,
              private fb: FormBuilder,
              private afs: AngularFirestore) { 
                this.receivePaymentForm = this.fb.group(
                  {
                    modeofpayment: [''],
                    month: [''],
                    amount: [''],
                    paymentid: ['']

                  });

              }

  ngOnInit() {
    this.uid = this.activatedRoute.snapshot.params['id'];
    this.getCurrentUser(this.uid);
    this.getUserRent(this.uid)

  }
  getUserRent(uid){
    this.afs.collection('rentpayments', ref => ref.where('tenatId', '==', uid)).snapshotChanges().subscribe(rent => {
      this.rents=rent.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Rent
      })
    })
  }
 
  getCurrentUser(uid){
    this.afs.doc<User>(`users/${uid}`).valueChanges().subscribe(user =>{
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
      this.propId = user.propertyId;
     
    })
  }

  submit(){
    const rentId = this.afs.createId();
    this.afs.doc(`rentpayments/${rentId}`).set({
      rentId: rentId,
      
      landlordId: this.uid,
      amount: this.receivePaymentForm.value['amount'],
      modeofpayment: this.receivePaymentForm.value['modeofpayment'],
      paymentid: this.receivePaymentForm.value['paymentid'],
      month: this.receivePaymentForm.value['month'],
      arreas: (Number(this.propRent))-(Number(this.receivePaymentForm.value['amout'])),
      year: new Date().getFullYear(),
      datePaid: new Date()
      
    })
  }
}

