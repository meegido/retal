import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GetOneService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getCampaign(id) {
  return this.http.get(`${this.BASE_URL}/api/campaigns/${id}`)
    .map((res) => res.json());
  }

  getFabric(id) {
  return this.http.get(`${this.BASE_URL}/api/fabrics/${id}`)
    .map((res) => res.json());
  }
}
