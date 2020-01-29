import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  
  property:FormGroup;
  selected = 'option2'


  categories = [
    new Property('Java'),
    new Property( 'Angular'),
    new Property('Hibernate'),
    new Property( 'Spring')		 
] 

  constructor(
    private propertyService:PropertiesService,
    private fb:FormBuilder
  ) { }


  ngOnInit() {
    this.property = this.fb.group(
      {
        name:[''],
        category:[''],
        available:['']
      }
    )
  }

}
