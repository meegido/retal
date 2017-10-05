import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignDetailService } from '../services/campaign-detail.service'

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent implements OnInit {

  campaign;
  fabric;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private campaignDetailService:CampaignDetailService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    //  console.log(`El parametro recibido es: ${params['id']}`);
      this.getCampaignDetails(params['id'])
    });
  }

  getCampaignDetails(id) {
    this.campaignDetailService.getCampaign(id)
      .subscribe((campaign) => {
        this.campaign = campaign;
      })
  }
}
