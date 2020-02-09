import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Property } from 'src/app/models/property.model';
import { LandlordsService } from 'src/app/services/landlords.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  property:Property[];

  constructor(private landlordService:LandlordsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    this.getProperties();
   
  }
  getProperties(){
    this.landlordService.getAllproperties().subscribe(properties=>{
      this.property = properties.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Property
      })
    })
  }
}
