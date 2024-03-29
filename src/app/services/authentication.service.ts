import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { PropertiesService } from './properties.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  id: string;
  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private snackBar: MatSnackBar,
    private propertyService: PropertiesService,
    private router: Router
  ) {}

  registerLandlordUser(name, email, password, phone) {
    this.afa.auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.createLandLordUser(authUser.user.uid, name, email, phone, password);
      });
  }
  registerTenantUser(name, email, password, phone, propertyId){
    this.afa.auth.createUserWithEmailAndPassword(email, password).then(authUser => {
      this.createTenantUser(authUser.user.uid, name, email, phone, password, propertyId);
    })
  }
  createTenantUser(uid, name, email, phone, password, propertyId) {
    this.afs.doc(`users/${uid}`).set({
      name: name,
      uid: uid,
      email: email,
      phone: phone,
      propertyId: propertyId,
      roles: {
        tenant: true,
        agent: false,
        landlord: false
      }
    });
   
    this.propertyService.bookProperty(uid, name,email, phone, propertyId )
    this.userLogin(email, password)
  }
  createLandLordUser(uid, name, email, phone, password) {
    this.afs.doc(`users/${uid}`).set({
      name: name,
      uid: uid,
      email: email,
      phone: phone,
      roles: {
        tenant: false,
        agent: false,
        landlord: true
      }
    });
    this.userLogin(email, password)
    this.showSnackBar(uid);
  }
  showSnackBar(uid) {
    this.openSnackBar('Registered Successfully!', 'Ok');
   
  }
  navigateToListProperty(uid: any) {
    //this.router.navigate(['/landlord/' + {uid} + '/listproperty']);
    this.router.navigate(['/auth/login'])
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      // here specify the position
      verticalPosition: 'top'
    });
  }

  userLogin(email, password) {
    this.afa.auth.signInWithEmailAndPassword(email, password).then(authUser => {
      this.getCurrentUser(authUser.user.uid);
    });
  }
  getCurrentUser(uid) {
    this.id = uid;
    this.afs
      .doc<User>(`users/${this.id }`)
      .valueChanges()
      .subscribe(user => {
        if (user.roles.agent) {
          this.navigateToAgentDashboard(this.id );
        } else if (user.roles.landlord) {
          this.navigateToLandLordDashboard(this.id );
        } else if (user.roles.tenant) {
          console.log("User Email" + user.email)
          this.navigateToTenantDashboard(this.id );
        }
      });
  }


  navigateToLandLordDashboard(uid) {
    
    this.router.navigate(['/landlord/' + uid + '/dashboard']);
  }
  navigateToAgentDashboard(uid) {
    this.router.navigate(['/agent/' + uid + '/dashboard']);
  }
  navigateToTenantDashboard(uid) {
    this.router.navigate(['/tenant/'  + uid + '/dashboard']);
  }

}
