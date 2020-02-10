import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { PropertiesService } from '../services/properties.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prop-details',
  templateUrl: './prop-details.component.html',
  styleUrls: ['./prop-details.component.css']
})
export class PropDetailsComponent implements OnInit {
 // property:Property
  //properties:Property
  propName: any;
  propCounty: any;
  rent:any
  category:any
  description:any
  image: string;

  constructor(
    private afs:AngularFirestore,
     private propertyService: PropertiesService,
     private activeRoute: ActivatedRoute,
     
  ) { }

  ngOnInit() {
    const propertyId = this.activeRoute.snapshot.params['id']
    this.viewDetails(propertyId);
  }
  viewDetails(propertyId) {
    this.afs.doc<Property>(`property/${propertyId}`).valueChanges().subscribe(details=>{
      this.propName = details.propertyName;
      this.rent = details.Rent;
      this.category=details.category;
      this.description = details.description;
     // this.image = details.imageUrl

      
    
    })
    
  }
  // getUserResidence(propertyId: string) {
  //   this.afs.doc<Property>(`property/${propertyId}`).valueChanges().subscribe(property => {
  //     this.propName = property.propertyName;
  //     this.propCounty = property.county;
  //     this.propTown = property.Town;
  //     this.propRent = property.Rent;
 
  //   })
  //  }

}
