import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listproperty',
  templateUrl: './listproperty.component.html',
  styleUrls: ['./listproperty.component.css']
})
export class ListpropertyComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  form:FormGroup;
  featureList = [
    {  name: 'electricity is token based ' },
    {  name: 'tiles floor ' },
    {  name: 'fans installed ' },
    {  name: 'wardrobe' },
    { name: 'swimming pool' },
    { name: 'hot and cold shower' }
  ];

  name;
  email;
  phone;
  constructor(private afs: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    
   }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      pname: ['', Validators.required],
      slots: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      country: ['', Validators.required],
      county: ['', Validators.required],
      town: ['', Validators.required],
      loc: ['', Validators.required]
    });
    this.form = this.formBuilder.group({
      features: new FormArray([])});
     // this.addCheckboxes();
    
    
  const uid = this.activatedRoute.snapshot.params['id'];
    this.getCurrentUser(uid);
  }
  // addCheckboxes() {
  //   this.featureList.forEach((o, i) => {
  //     const control = new FormControl(i === 0); // if first item set to true, else false
  //     (this.form.controls.features as FormArray).push(control);
  //   });
  // }

getCurrentUser(uid) {
  console.log("The user id is" + uid)
  this.afs
    .doc<User>(`users/${uid}`)
    .valueChanges()
    .subscribe(user => {
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
    });
}
onSubmit(){

}

}
