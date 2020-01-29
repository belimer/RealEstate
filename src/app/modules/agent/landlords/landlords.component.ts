import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LanlordsService } from 'src/app/services/lanlords.service';
import { Landlord } from 'src/app/models/landlords.model';

@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.css']
})
export class LandlordsComponent implements OnInit {

  registerLandlord:FormGroup
  landLords: Landlord[]
  constructor(
    private landlordService:LanlordsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registerLandlord = this.fb.group(
      {
        name:['', Validators.required],
        phone:['', Validators.required],
        email:['', Validators.required]
      }
    )
    
    this.getAllLandlords();

  }
  getAllLandlords() {
    this.landlordService.getAllLanlords().subscribe(actionArray => {
      this.landLords = actionArray.map(item => {
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Landlord
      })
    })
   
  }
  onAdd(){
    const status = true;
    const regBy = "Admin";
    this.landlordService.createLandLordUser(
      this.registerLandlord.value['name'],
      this.registerLandlord.value['phone'],
      this.registerLandlord.value['email'],
      status,
      regBy
    )
  }

}
