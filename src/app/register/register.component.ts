import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
send =false;
//login : any;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  showLogin() {
this.router.navigate(['/login']);

  }
 
}
