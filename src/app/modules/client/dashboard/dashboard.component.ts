import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';
import { Property } from 'src/app/models/property.model';
import { Rent } from 'src/app/models/rent.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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

  rents: Rent[]
  constructor(private activatedRoute: ActivatedRoute, 
              private authService: AuthenticationService,
              private afs: AngularFirestore) { }

  ngOnInit() {
    this.uid = this.activatedRoute.snapshot.params['id'];
    this.getCurrentUser(this.uid);
    this.getUserRent(this.uid);
  }
  getCurrentUser(uid){
    this.afs.doc<User>(`users/${uid}`).valueChanges().subscribe(user =>{
      this.name = user.name;
      this.email = user.email;
      this.phone = user.email;
      this.getUserResidence(user.propertyId);
    })
  }
  getUserResidence(propertyId: string) {
   this.afs.doc<Property>(`property/${propertyId}`).valueChanges().subscribe(property => {
     this.propName = property.propertyName;
     this.propCounty = property.county;
     this.propTown = property.Town;
     this.propRent = property.Rent
   })
  }

  getUserRent(uid){
    this.afs.collection('rent', ref => ref.where('tenatId', '==', uid)).snapshotChanges().subscribe(rent => {
      this.rents=rent.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Rent
      })
    })
  }

}
