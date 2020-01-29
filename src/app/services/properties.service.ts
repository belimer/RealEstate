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
}
