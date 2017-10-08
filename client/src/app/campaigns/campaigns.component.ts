import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { CampaignService } from '../services/campaign.service';
import { FabricsService } from '../services/fabrics.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
  providers: [FabricsService]
})
export class CampaignsComponent implements OnInit {


  constructor(public campaignS:CampaignService) { }

  ngOnInit() {

  }


  }

  // getRecipesDetails(id) {
  //   this.dishesService.get(id)
  //   .subscribe((recipe) => {
  //     this.recipe = recipe
  //   })
  //   this.ingredients = this.ingredientsService.getIngredients()
  // }
