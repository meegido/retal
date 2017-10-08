import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class FabricsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getListFabrics() {
    return this.http.get(`${this.BASE_URL}/api/fabrics`)
      .map((res) => res.json());
  }

  getFabric(id) {
  return this.http.get(`${this.BASE_URL}/api/fabrics/${id}`)
    .map((res) => res.json());
  }
}
