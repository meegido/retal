import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment }  from '../../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class OrderService {
  public BASEURL = environment.BASEURL;
  private options = { withCredentials: true };

  constructor(private http: Http) { }
  
  newOrder(order) {
    return this.http.post(`${this.BASEURL}/api/orders/new`, order)
    .map(res => { res.json(); console.log(res)});
  }
}
