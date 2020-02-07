import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class PropertiesService {
  
	constructor(private afs: AngularFirestore) {}

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
}
