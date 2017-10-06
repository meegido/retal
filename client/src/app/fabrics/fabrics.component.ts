import { Component, OnInit, Input } from '@angular/core';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-fabrics',
  templateUrl: './fabrics.component.html',
  styleUrls: ['./fabrics.component.css']
})
export class FabricsComponent implements OnInit {

@Input()
  fabrics:object;

  constructor(
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
