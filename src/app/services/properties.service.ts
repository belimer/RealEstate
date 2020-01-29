import { Injectable } from '@angular/core';
<<<<<<< HEAD

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }
=======
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
>>>>>>> 3d9f7b24f0c61cce2f17781bdca533019d94b5f6
}
