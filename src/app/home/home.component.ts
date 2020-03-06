import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Property } from '../models/property.model';
import { Observable } from 'rxjs';
import { PropertiesService } from '../services/properties.service';
import { Router } from '@angular/router';
//import { ImageServiceService } from '../image-service.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  property:Property
  selectedFile: ImageSnippet;
  properties: Property[]

  constructor(private afs:AngularFirestore, private propertyService: PropertiesService, private router: Router){}

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.propertyService.getAllProperties().subscribe(allProperties=>{
      this.properties=allProperties.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Property
      })
    })
  }

  displayImage(){
   let data = this.afs.collection("property").get();
   
  }

  checkAvailability(propertyId){
    this.afs.doc<Property>(`property/${propertyId}`).valueChanges().subscribe(details => {
      if(details.AvailableSlots == 0){
        this.showNoAvailableSlotsMessage();
      }else{
        this.navigateToBook(propertyId);
      }
    })
  }
  navigateToBook(propertyId: string) {
   this.router.navigate(['/' + propertyId + '/book' ]);
  }
  showNoAvailableSlotsMessage() {
    this.propertyService.openSnackBar('There are no available rooms now, try another', 'Ok');
  }
}