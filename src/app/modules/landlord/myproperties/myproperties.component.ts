import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { LandlordsService } from 'src/app/services/landlords.service';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css']
})
export class MypropertiesComponent implements OnInit {
  property:Property[];

  constructor(private landlordService:LandlordsService) { }

  ngOnInit() {
    this.getProperties();
  }
  getProperties(){
    this.landlordService.getMyproperty().subscribe(properties=>{
      this.property = properties.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Property
      })
    })
  }
}
