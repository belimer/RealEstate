import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';

@Injectable({
	providedIn: 'root'
})
export class PropertiesService {
  
	constructor(private afs: AngularFirestore,  private snackBar: MatSnackBar, ) {}

	createCategory(name) {
    const categoryid =Math.floor((Math.random()* 10000)+1)
		this.afs.doc(`categories/${categoryid}`).set({
      name: name,
      categoryid: categoryid
		});
	}

	getCategories() {
		return this.afs.collection('categories').snapshotChanges();
	}
	createProperty(name, category, availableSlots){
		const propertyId = this.getRandomId();
		this.afs.doc(`properties/${propertyId}`).set({
			propertyName:name,
			propertyId:propertyId,
			category:category,
			AvailableSlots:availableSlots
		});
	}
	getRandomId() {
		return Math.floor((Math.random()*1000)+1);
	}
	
	getProperties(){
		return this.afs.collection('properties').snapshotChanges();
	}
	getAllProperties(){
		return this.afs.collection('property').snapshotChanges();
	}


	bookProperty(uid, name, email, phone, propertyId){
  
		let bookId = this.afs.createId();
		this.afs.doc(`bookings/${bookId}`).set({
		  propertyId: propertyId,
		  bookId,
		  name: name,
		  email: email,
		  phone: phone,
		  uid: uid,
		  date: new Date()
	
	
		})
		this.successfulMessage();
	  }
	 
	  successfulMessage() {
		this.openSnackBar('Your reservation was successful!', 'Ok');
	   
	  }
	  openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
		  duration: 2000,
		  // here specify the position
		  verticalPosition: 'top'
		});
	  }
}
