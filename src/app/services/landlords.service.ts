import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Landlord } from '../models/landlords.model';

@Injectable({
  providedIn: 'root'
})
export class LandlordsService {

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

    createLandLordUser(name, phone, email, status, regBy){
      this.afa.auth.createUserWithEmailAndPassword(email, phone).then((landlordAuth) => {
        const landlordId = landlordAuth.user.uid;
        this.addLandlord(landlordId, name, email, phone, status, regBy);
        this.addUser(landlordId, name, phone, email);
      })
    }
  addUser(landlordId: string, name: any, phone: any, email: any) {
    this.afs.doc(`users/${landlordId}`).set({
      name: name,
      phone:phone,
      email:email,
      uid: landlordId,
      roles: {
        agent: false,
        landlord: true,
        tenant: false
      }
    })
  }

    

    addLandlord(landlordId, name, email, phone, status, regBy ){
      this.afs.doc(`landlords/${landlordId}`).set({
        name: name,
        phone:phone,
        email:email,
        landlordId: landlordId,
        status: status,
        registeredBy: regBy,
        createdAt: new Date(),

    })
  }
  getAllLanlords(){
   return this.afs.collection('landlords').snapshotChanges();
  }
}
