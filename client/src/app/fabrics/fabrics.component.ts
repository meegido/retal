import { Component, OnInit } from '@angular/core';
import { CampaignsComponent } from '../campaigns/campaigns.component'
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-fabrics',
  templateUrl: './fabrics.component.html',
  styleUrls: ['./fabrics.component.css']
})
export class FabricsComponent implements OnInit {

  fabrics;
  constructor(
    private campaings:CampaignsComponent,
    public campaignService:CampaignService
  ) { }

  ngOnInit() {
    this.campaignService.getListFabrics()
      .subscribe(
        (data) => {
          this.fabrics = data
        },
        (err) => {
          console.log(this.fabrics)
        });
  }
}
