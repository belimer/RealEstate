import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { LandlordsService } from 'src/app/services/landlords.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listproperty',
  templateUrl: './listproperty.component.html',
  styleUrls: ['./listproperty.component.css']
})
export class ListpropertyComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  form: FormGroup;

  name;
  email;
  phone;
  downloadURL: Observable<string>
  imageUrl:string
  uid: any
  constructor(private afs: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private lService: LandlordsService,
    private storage: AngularFireStorage,
    // private db: AngularFirestore,
   
  ) {

  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      pname: ['', Validators.required],
      slots: ['', Validators.required],
      category: ['', Validators.required],
      image: [''],
      rent: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      country: ['', Validators.required],
      county: ['', Validators.required],
      town: ['', Validators.required],
      loc: ['', Validators.required]
    });
    this.form = this.formBuilder.group({
      token: ['', Validators.required],
      swim: ['', Validators.required],
      shower: ['', Validators.required],
      tiles: ['', Validators.required],
      wardrobe: ['', Validators.required],
      fan: ['', Validators.required]
    });
    // this.addCheckboxes();


    this.uid = this.activatedRoute.snapshot.params['id'];
    this.getCurrentUser(this.uid);
  }


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

  uploadImage(event) {
    const file = event.target.files[0];
    const filePath = `images/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

   
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL()
      //   this.downloadURL.subscribe(url => {
      //     //console.log("Image URL: " + url)
      //    this.imageUrl = url;
      //  })
      })
    ).subscribe();

  }

  onSubmit() {
    this.lService.addMyproperties(
      this.firstFormGroup.value['pname'],
      this.firstFormGroup.value['slots'],
      this.firstFormGroup.value['category'],
      this.firstFormGroup.value['rent'],
      this.secondFormGroup.value['town'],
      this.secondFormGroup.value['country'],
      this.secondFormGroup.value['county'],
      this.secondFormGroup.value['loc'],
      this.form.value['swim'],
      this.form.value['shower'],
      this.form.value['token'],
      this.form.value['fan'],
      this.form.value['wardrobe'],
      this.form.value['tiles'],
      this.firstFormGroup.value['image'],
      this.uid
    );

  }


}
