import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Issues } from 'src/app/models/issues.model'

@Component({
  selector: 'app-concerns',
  templateUrl: './concerns.component.html',
  styleUrls: ['./concerns.component.css']
})
export class ConcernsComponent implements OnInit {
  issuesForm: FormGroup
  uid: any
  issues: Issues[]
  constructor(private fb: FormBuilder, private afs: AngularFirestore, private activatedRoute: ActivatedRoute) {
  
   }

  ngOnInit() {
    this.uid = this.activatedRoute.snapshot.params['id']
    this.issuesForm = this.fb.group(
      {
        title: [''],
        description: [''],
      
      });

      this.getMyIssues(this.uid);
  }
  getMyIssues(uid){
    this.afs.collection('issues', ref => ref.where('uid', '==', uid)).snapshotChanges().subscribe(issue => {
      this.issues=issue.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Issues
      })
    })
  }
  submit(){
    const issueId = this.afs.createId();
    
    this.afs.doc(`issues/${issueId}`).set({
      uid: this.uid,
      title: this.issuesForm.value['title'],
      description: this.issuesForm.value['description'],
      date: new Date(),
      status: "pending",
      issueId: issueId

    })
  }
}
