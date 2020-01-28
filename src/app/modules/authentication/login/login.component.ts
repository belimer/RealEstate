import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;

  constructor(private fb:FormBuilder,
    private authService:AuthenticationService) { }

  ngOnInit() {
  this.login = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  }) 
  }
  onSubmit(){
    this.authService.userLogin(
      this.login.value['email'],
      this.login.value['password']
    )
  }
  

}
