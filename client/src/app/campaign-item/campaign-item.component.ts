import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GetOneService } from '../services/get-one.service'

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
    private getOne:GetOneService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(`El parametro es ${params['id']}`);
       this.getCampaignItem(params['id'])
   });
  }

  getCampaignItem(id) {
    this.getOne.getCampaign(id)
    .subscribe((campaign) => {
      this.campaign = campaign
    })
  }


}
