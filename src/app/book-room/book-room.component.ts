import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  register:FormGroup
  

  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
    this.register = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      phone:['', Validators.required],

    })
  }
  
  onSubmit(){
   const propertyId = this.activatedRoute.snapshot.params['id'];
   const name = this.register.value['name'];
   const email =this.register.value['email'];
   const password = this.register.value['password'];
   const phone =this.register.value['phone'];
    
  this.authService.registerTenantUser(name, email, password,phone, propertyId)
   this.register.reset();

  }
 
}
