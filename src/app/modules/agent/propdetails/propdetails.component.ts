import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Booking } from 'src/app/models/bookings.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propdetails',
  templateUrl: './propdetails.component.html',
  styleUrls: ['./propdetails.component.css']
})
export class PropdetailsComponent implements OnInit {

  property:Property
  name: any
  availableslots: any
  image: any
  country:any
  county:any
  loc:any
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  form: FormGroup;
  category: string;
  town: string;
  swim: any
  wardbrobe: boolean;
  shower: boolean;
  token: boolean;
  tiles: boolean;
  fan: boolean;

  bookings: Booking[];

  constructor(private afs:AngularFirestore,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
                this.firstFormGroup = this.formBuilder.group({
                  pname: ['', Validators.required],
                  slots: ['', Validators.required],
                  category: ['', Validators.required],
                  image: ['']
                });
                this.secondFormGroup = this.formBuilder.group({
                  country: ['', Validators.required],
                  county: ['', Validators.required],
                  town: ['', Validators.required],
                  loc: ['', Validators.required]
                });
                this.form = this.formBuilder.group({
                  token: ['', Validators.required],
                  swim: ['', Validators.required],
                  shower: ['', Validators.required],
                  tiles: ['', Validators.required],
                  wardrobe: ['', Validators.required],
                  fan: ['', Validators.required]
                });
               }


   ngOnInit() {
    this.getPropertyDetails();
    this.getProperyOccupants();
  }
  getProperyOccupants() {
    let propertyId = this.activatedRoute.snapshot.params['id']
    this.afs.collection('bookings', ref => ref.where('propertyId', '==', propertyId)).snapshotChanges().subscribe(booking=>{
      this.bookings = booking.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Booking
      })
    })
    
  }
  getPropertyDetails() {
    let propertyId = this.activatedRoute.snapshot.params['id']
    this.afs.doc<Property>(`property/${propertyId}`).valueChanges().subscribe(prop => {
      this.name = prop.propertyName;
      this.availableslots = prop.AvailableSlots;
      this.category = prop.category;
      
      this.country=prop.country
      this.county=prop.county
      this.town = prop.Town
      this.loc =prop.location
      this.swim = prop.features.swim
      this.shower =prop.features.shower
      this.wardbrobe = prop.features.wardrobe
      this.token =prop.features.token
      this.tiles = prop.features.tiles
      this.fan = prop.features.fan

    })
  }

}
