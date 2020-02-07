import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Property } from '../models/property.model';
import { Observable } from 'rxjs';
import { PropertiesService } from '../services/properties.service';
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

  constructor(private afs:AngularFirestore, private propertyService: PropertiesService){}

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
}