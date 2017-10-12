import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { FabricsService } from '../services/fabrics.service';
import { AuthService } from '../services/auth.service';
import { CampaignsService } from '../services/campaigns.service';
//import { FabricItemComponent } from './fabric-item.fabric-item.component'

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {
  campaign
  user: any
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fabricS: FabricsService,
    private campaignS: CampaignsService,
    private authS: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authS.getUser();
    this.authS.getLoginEventEmitter().subscribe( user => {
      console.log(this.user)
      this.user = user

    })
    this.route.params.subscribe(params => {
      console.log(`El parametro es ${params['id']}`)
      this.getCampaignItem(params['id'])
    })
  }

  getCampaignItem(id) {
    this.campaignS.getCampaign(id).subscribe(campaign => {
      this.campaign = campaign
    })
  }
}
