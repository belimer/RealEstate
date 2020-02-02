import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../shared/upload.service';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

   // Main task 
   task: AngularFireUploadTask;

   // Progress monitoring
   percentage: Observable<number>;
 
   snapshot: Observable<any>;
 
   // Download URL
   downloadURL: Observable<string>;
 
   // State for dropzone CSS toggling
   isHovering: boolean;

   constructor(
   private storage: AngularFireStorage, 
   private db: AngularFirestore
  ) { }
 
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe()
      // tap(snap => {
      //   if (snap.bytesTransferred === snap.totalBytes) {
      //     // Update firestore on completion
      //     this.db.collection('photos').add( { path, size: snap.totalBytes })
      //   }
      // })
    

    // The file's download URL
    // this.downloadURL = this.task.downloadURL(); 
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
 
  }
