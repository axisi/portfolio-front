import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:8080/api/image/';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) {  }

  imageToShow: any;
  getImages(): Observable <any> {
    // tslint:disable-next-line:label-position
   return this.http
     .get(API_URL + '1', {responseType: 'blob'});
  }


}
