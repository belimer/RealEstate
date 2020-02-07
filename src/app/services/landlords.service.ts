import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';

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

  createProperty(name, country, county,location, category, available){
    const propertyId = this.getRandomId();
    // var landlordTable = this.afs.collection('landlords')
    // var landlord =landlordTable.ref.where("landlordId", "==", "").get();

    this.afs.doc(`properties/${propertyId}`).set({
      propertyId:propertyId,
      propertyName: name,
      country:country,
      county: county,
      location:location,
      category:category,
      AvailableSlots: available

    })
  }


  getMyproperty(){
    return this.afs.collection('property').snapshotChanges();
  }


  getRandomId() {
		return Math.floor((Math.random()*1000)+1);
	}

  addMyproperties(name, available,category, rent, town,country,county, location, swim, shower, token, fan, wardrobe, tiles, image){
    const propertyId = this.getRandomId();
    this.afs.doc(`property/${propertyId}`).set({
      propertyId:propertyId,
      propertyName: name,
      country:country,
      county: county,
      location:location,
      category:category,
      Rent:rent,
      AvailableSlots: available,
      Town: town,
      imageUrl: image,
      features:{
        shower: shower,
        token: token,
        fan: fan,
        wardrobe: wardrobe,
        tiles: tiles,
        swim: swim
 

      } 
    })
  }
}
