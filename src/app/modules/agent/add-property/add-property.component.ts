import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LandlordsService } from 'src/app/services/landlords.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

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

  users: User[]

  constructor(private afs: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private lService: LandlordsService,
    private storage: AngularFireStorage,
    private landlordService: LandlordsService
    // private db: AngularFirestore,
   
  ) {

  }

  ngOnInit() {
    this.getAllLandlords();
    this.firstFormGroup = this.formBuilder.group({
      pname: ['', Validators.required],
      slots: ['', Validators.required],
      category: ['', Validators.required],
      image: [''],
      rent: ['', Validators.required],
      landlordId: ['', Validators.required]
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

  getAllLandlords() {
		this.landlordService.getAllLanlords().subscribe(actionArray => {
			this.users = actionArray.map(item => {
				return {
					id: item.payload.doc.id,
					...item.payload.doc.data()
				} as User;
			});
		});
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
      this.firstFormGroup.value['landlordId']
    );

  }


}
