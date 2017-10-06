import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CampaignService {

  BASE_URL: string = 'http://localhost:3000';

    constructor(private http: Http) { }

    getListCampaigns() {
      return this.http.get(`${this.BASE_URL}/api/campaigns`)
        .map((res) => res.json());
    }

}
