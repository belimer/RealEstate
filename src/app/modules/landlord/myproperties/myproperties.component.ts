import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { LandlordsService } from 'src/app/services/landlords.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css']
})
export class MypropertiesComponent implements OnInit {
  property:Property[];

  constructor(private landlordService:LandlordsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const landlordId = this.activatedRoute.snapshot.params['id']
    this.getProperties(landlordId);
  }
  getProperties(landlordId){
    this.landlordService.getMyproperty(landlordId).subscribe(properties=>{
      this.property = properties.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Property
      })
    })
  }
}
