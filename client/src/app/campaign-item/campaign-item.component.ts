import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FabricsService } from '../services/fabrics.service';
import { CampaignService } from '../services/campaign.service';
//import { FabricItemComponent } from './fabric-item.fabric-item.component'

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {

  campaign;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private fabricS:FabricsService,
    private campaignS:CampaignService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(`El parametro es ${params['id']}`);
       this.getCampaignItem(params['id'])
   });
  }

  getCampaignItem(id) {
    this.campaignS.getCampaign(id)
    .subscribe((campaign) => {
      this.campaign = campaign
    })
  }


}
