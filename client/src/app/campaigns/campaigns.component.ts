import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { CampaignsService } from '../services/campaigns.service';
import { FabricsService } from '../services/fabrics.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
  providers: [FabricsService]
})
export class CampaignsComponent implements OnInit {

  campaigns;
  fabrics;
  constructor(
    private campaignS:CampaignsService,
    private fabricS:FabricsService
  ) { }

  ngOnInit() {
    this.fabricS.getListFabrics()
      .subscribe(fabric => {
        this.fabrics = fabric;
      },
      (err) => {
        console.log(this.fabrics);
      });

    this.campaignS.getListCampaigns()
      .subscribe(campaign => {
        this.campaigns = campaign;
      },
      (err) => {
        console.log(this.campaigns);
      });
  }

  }
