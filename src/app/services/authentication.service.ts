import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  registerLandlordUser(name, email, password, phone) {
    this.afa.auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.createLandLordUser(authUser.user.uid, name, email, phone);
      });
  }

  createLandLordUser(uid, name, email, phone) {
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
    this.showSnackBar(uid);
  }
  showSnackBar(uid) {
    this.openSnackBar('Registered Successfully!', 'Ok');
    this.navigateToListProperty(uid);
  }
  navigateToListProperty(uid: any) {
    this.router.navigate(['/landlord/' + {uid} + '/listproperty']);
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
    this.afs
      .doc<User>(`users/${uid}`)
      .valueChanges()
      .subscribe(user => {
        if (user.roles.agent) {
          this.navigateToAgentDashboard(uid);
        } else if (user.roles.landlord) {
          this.navigateToLandLordDashboard(uid);
        } else if (user.roles.tenant) {
          this.navigateToTenantDashboard(uid);
        }
      });
  }
  navigateToLandLordDashboard(uid) {
    this.router.navigate(['/landlord/' + { uid } + '/dashboard']);
  }
  navigateToAgentDashboard(uid) {
    this.router.navigate(['/agent/' + { uid } + '/dashboard']);
  }
  navigateToTenantDashboard(uid) {
    this.router.navigate(['/tenant/' + { uid } + '/dashboard']);
  }
}
