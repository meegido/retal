import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment }  from '../../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class FabricsService {
  public BASEURL = environment.BASEURL;
  private options = { withCredentials: true };

  constructor(private http: Http) { }

  getListFabrics() {
    return this.http.get(`${this.BASEURL}/api/fabrics`)
      .map((res) => res.json());
  }

  getFabric(id) {
  return this.http.get(`${this.BASEURL}/api/fabrics/${id}`)
    .map((res) => res.json());
  }
}
