import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../shared/upload.service';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, finalize } from 'rxjs/operators'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  uploadPercent: Observable < number > ;
downloadURL: Observable < string > ;

   constructor(
   private storage: AngularFireStorage, 
   private db: AngularFirestore
  ) { }
  // const url = fileRef.getDownloadURL();
    // let imageId = this.db.createId()
    //   this.db.doc(`images/${imageId}`).set({
    //     ImageId:imageId,
    //     imageUrl: url
    //   })
 
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath =`images/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
  
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL())
      )
      .subscribe()
  }
}
