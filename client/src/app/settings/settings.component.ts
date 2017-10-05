import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings;
  constructor(
    public campaignService:CampaignService
  ) { }

  ngOnInit() {
    this.campaignService.getListSettings()
      .subscribe(
        (data) => {
          this.settings = data
        },
        (err) => {
          console.log(this.settings)
        })
    }

}
