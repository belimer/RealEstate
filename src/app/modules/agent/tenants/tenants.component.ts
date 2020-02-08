import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  tenants: User[]
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getAllTenants()
  }

  getAllTenants(){
    this.afs.collection('users', ref => ref.where('roles.tenant', '==', true)).snapshotChanges().subscribe(tens => {
      this.tenants=tens.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as User
      })
    })
  }
 
}
