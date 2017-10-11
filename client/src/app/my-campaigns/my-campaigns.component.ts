import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { CampaignsService } from '../services/campaigns.service';

@Component({
  selector: 'app-my-campaigns',
  templateUrl: './my-campaigns.component.html',
  styleUrls: ['./my-campaigns.component.css']
})
export class MyCampaignsComponent implements OnInit {
  user:any;
  campaigns:any;
  buyer:any;
  order:any;
  meters:any;
  constructor(
    private router:Router,
    private auth:AuthService,
    private campaignS:CampaignsService
  ) {
    this.user = this.auth.getUser()
    this.auth.getLoginEventEmitter().subscribe(user => {
      this.user = user;
      this.campaignS.getListCampaigns().subscribe(campaigns => {
        this.campaigns = campaigns.filter( userCampaign => {
           return userCampaign.maker._id === this.user._id
         })
      });
    })
  }

  ngOnInit() {}
}
