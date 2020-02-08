import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  uid: any
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.uid = this.activatedRoute.snapshot.params['id']
  }

}
