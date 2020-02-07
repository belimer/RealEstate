import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Property } from 'src/app/models/property.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
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
