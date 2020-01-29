import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  propertyForm: FormGroup;
  property:Property[]

  constructor(
    private propertyService: PropertiesService,
    private fb: FormBuilder
  ) { }

  categories: any = ['single room', 'bedsitter', 'one-bedroom', 'two-bedroom']





  /* Select Dropdown error handling */
  public handleError = (controlName: string, errorName: string) => {
    return this.propertyForm.controls[controlName].hasError(errorName);
  }



  ngOnInit() {
    this.propertyForm = this.fb.group(
      {
        name: [''],
        category: [''],
        available: ['']
      });
      this.getProperties();
  }
  getProperties() {
    this.propertyService.getProperties().subscribe(allProperties=>{
      this.property=allProperties.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Property
      })
    })
  }
  onAdd(){
    this.propertyService.createProperty(
      this.propertyForm.value['name'],
      this.propertyForm.value['category'],
      this.propertyForm.value['available']
    )
   
  }

}
