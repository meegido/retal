import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GetOneService } from '../services/get-one.service';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-fabric-item',
  templateUrl: './fabric-item.component.html',
  styleUrls: ['./fabric-item.component.css']
})
export class FabricItemComponent implements OnInit {
  @Input() campaign:object;
  @Input() fabric:object;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private getOne: GetOneService,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido de fabric es: ${params['id']}`);
      this.fabricItem(params['id'])
    });

  }

  fabricItem(id){
    this.getOne.getFabric(id)
      .subscribe((fabric) => {
        this.fabric = fabric;
      });
  }

}
