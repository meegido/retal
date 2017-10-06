import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignDetailService } from '../services/campaign-detail.service';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';

@Component({
  selector: 'app-fabric-detail',
  templateUrl: './fabric-detail.component.html',
  styleUrls: ['./fabric-detail.component.css']
})
export class FabricDetailComponent implements OnInit {
  fabric;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private campaignDetailService:CampaignDetailService,
    private campaignDetailComponent:CampaignDetailComponent
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro tela recibido es: ${params['id']}`);
      this.getFabricDetails(params['id']);
    });
  }

  getFabricDetails(id) {
    this.campaignDetailService.getFabric(id)
      .subscribe((fabric) => {
        this.fabric = fabric;
      })
  }
}
