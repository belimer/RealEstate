import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { Booking } from 'src/app/models/bookings.model';
import { LandlordsService } from 'src/app/services/landlords.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    property:Property[];
    bookings: Booking[]
    landlordId: any
    constructor(private landlordService:LandlordsService, private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
      this.landlordId = this.activatedRoute.snapshot.params['id']
      this.getProperties(this.landlordId);
     
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