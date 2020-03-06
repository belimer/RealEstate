import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;

  constructor (
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit () {
    this.register = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit () {
    const name = this.register.value['name'];
    const email = this.register.value['email'];
    const password = this.register.value['password'];
    const phone = this.register.value['phone'];

    if (name == '' && email == '' && password == '' && phone == '') {
      const message = 'All fields are required';
      this.showMessage(message);
    } else if (name == '') {
      const message = 'Name is required';
      this.showMessage(message);
    } else if (email == '') {
      const message = 'Email is required';
      this.showMessage(message);
    } else if (password == '') {
      const message = 'Password mandatory';
      this.showMessage(message);
    }
    if (phone == '') {
      const message = 'Phone is mandatory';
      this.showMessage(message);
    } else {
      this.authService.registerLandlordUser(name, email, password, phone);
      this.register.reset();
    }
  }
  login () {
    this.router.navigate(['/login']);
  }
  //   this.authService.registerUser(this.register.value['name'],
  //   this.register.value['email'],
  //   this.register.value['password'],
  //   this.register.value['phone'])

  // console.log( "User Data: "+this.register.value['name'],
  // this.register.value['email'],
  // this.register.value['password'],
  // this.register.value['phone'])

  // }

   showMessage(message) {
    this.snackBar.open(message, 'ok', {
      duration: 2000,
      // here specify the position
      verticalPosition: 'top'
    });
  }
}
