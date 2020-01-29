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
			name:name,
			propertyId:propertyId,
			category:category,
			availableSlots:availableSlots
		});
	}
	getRandomId() {
		return Math.floor((Math.random()*6)+1);
	}
	
	getProperties(){
		return this.afs.collection('properties').snapshotChanges();
	}
}
