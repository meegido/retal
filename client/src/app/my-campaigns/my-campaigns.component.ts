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
  user:any
  userCampaigns:any

  constructor(
    private router: Router,
    private auth: AuthService,
    private campaignService:CampaignsService
  ) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter().subscribe(user => {
      this.user = user;
      this.campaignService.getListCampaigns().subscribe(campaigns => {
        this.userCampaigns = campaigns.filter( userCampaign => {
           return userCampaign.maker._id === this.user._id;
         })
      })
    })
  }

  ngOnInit() { }

  getTotalMeters(orders: Array<any>) {
    let totalMeters = 0
    for(var i = 0; i < orders.length; i++) {
      totalMeters += orders[i].meters
    }
    return totalMeters
  }

  getItemPrice(quantity, meterPrice){
    return quantity * meterPrice
  }

  getTotalPrice(orders, meterPrice){
    let totalMeters = 0
    for(var i = 0; i < orders.length; i++) {
      totalMeters += orders[i].meters * meterPrice
    }
    return totalMeters
  }
}
