import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ImageServiceService {

//   constructor() { }
//   uploadImage(image:File){}
// }
export class ImageServiceService {

  constructor(private http: HttpClient) {}


  // public uploadImage(image: File): Observable<Response> {
  //   const formData = new FormData();
  //   const headers = new HttpHeaders();
  //   formData.append('image', image);

  //   return this.http.post('/api/v1/image-upload', formData,{ headers }).pipe(map(
  //     (response:"hey cool") => {
  //       return response;
  //     }
  //   ));
  // }
  public uploadImage(image: File){}
}