import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LandlordsService } from 'src/app/services/landlords.service';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {
  addProperty: FormGroup;
  propertyId:any;

  constructor(
    private landlordService:LandlordsService,
    private fb:FormBuilder
  ) { }

  categories: any = ['single room', 'bedsitter', 'one-bedroom', 'two-bedroom']
  county: any = ['Nairobi', 'Mombasa', 'Kilifi', 'Nakuru']
  country: any = ['Kenya']
  location: any = ['Ukunda', 'Makadara', 'Runda', 'Njoro']

  ngOnInit() {
    this.addProperty= this.fb.group({
      name:[''],
      country:[''],
      county:[''],
      location:[''],
      category:[''],
      available:['']
    })
  }
  onAdd(){
    
    this.landlordService.createProperty(
      this.addProperty.value['name'],
      this.addProperty.value['country'],
      this.addProperty.value['county'],
      this.addProperty.value['location'],
      this.addProperty.value['category'],
      this.addProperty.value['available'],
     
    )
    
  }
  

}
