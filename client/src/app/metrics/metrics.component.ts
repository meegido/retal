import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { CampaignsService } from '../services/campaigns.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private campaignS:CampaignsService
  ) { }

  ngOnInit() {
  }

}
