import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignsService } from '../services/campaigns.service';
import { FabricsService } from '../services/fabrics.service'

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(
    private router:Router,
    private campaignS:CampaignsService,
    private fabricS:FabricsService
  ) { }

  ngOnInit() {
  }
}
