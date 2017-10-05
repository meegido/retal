import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { CampaignService } from '../services/campaign.service'

@Component({
  selector: 'app-campaign',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
  providers: [CampaignService]
})
export class CampaignsComponent implements OnInit {
  campaigns;

  constructor(public campaignService:CampaignService) { }

  ngOnInit() {
    this.campaignService.getList()
    .subscribe(
      (data) => {
        this.campaigns = data
      },
      (err) => {
        console.log(this.campaigns);
      });
    }
  }
