import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { PropertiesService } from '../services/properties.service';
import { ActivatedRoute } from '@angular/router';
import { Images } from '../models/images.model';

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
  rent: any
  category: any
  description: any
  image: any
  propertyId: any;
  imageId: any;
  imageUrl: any;

  images: Images[]


  constructor(
    private afs: AngularFirestore,
    private propertyService: PropertiesService,
    private activeRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    const propertyId = this.activeRoute.snapshot.params['id']
    this.viewDetails(propertyId);
    this.getRelatedImages();
  }
  viewDetails(propertyId) {
    this.afs.doc<Property>(`property/${propertyId}`).valueChanges().subscribe(details => {
      this.propName = details.propertyName;
      this.rent = details.Rent;
      this.category = details.category;
      this.description = details.description;
      this.propertyId = details.propertyId;
      this.image = details.imageUrl



    })

  }
  getRelatedImages() {
    const propId = this.activeRoute.snapshot.params['id']
    this.afs.collection('images', ref => ref.where('propertyId', '==', propId)).snapshotChanges()
      .subscribe(img => {
        this.images = img.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as Images
        })


      })
  }
}

  //  this.afs.collection('bookings', ref => ref.where('propertyId', '==', propertyId)).snapshotChanges()
  // .subscribe(booking=>{
  //       this.bookings = booking.map(item=>{
  //         return{
  //           id: item.payload.doc.id,
  //           ...item.payload.doc.data()
  //         }as Booking
  //       })
  //     })

