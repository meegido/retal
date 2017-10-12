import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment }  from '../../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class CampaignsService {
  public BASEURL = environment.BASEURL;
  private options = { withCredentials: true };

  constructor(private http: Http) { }

  getListCampaigns() {
    return this.http.get(`${this.BASEURL}/api/campaigns`)
      .map((res) => res.json());
  }

  getCampaign(id) {
  return this.http.get(`${this.BASEURL}/api/campaigns/${id}`)
    .map((res) => res.json());
  }

  newCampaign(campaign) {
    return this.http.post(`${this.BASEURL}/api/campaigns/new`)
    .map(res => { res.json(); console.log(res)})
  }
}
