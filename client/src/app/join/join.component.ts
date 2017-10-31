import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { OrderService } from '../services/order.service';
import { CampaignsService } from '../services/campaigns.service';

interface Order {
  buyerUsername: string;
  buyerEmail: string;
  meters: number;
}

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  order:Order = {
    buyerUsername: "",
    buyerEmail: "",
    meters: 0
  }
  current;
  campaignId;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private orderService:OrderService
  ) {}

  ngOnInit() {
    console.log('HELLO')
    this.getCampaignValue()
  }


  getCampaignValue() {
    console.log('ROUTING')
    return this.route.queryParams.subscribe(params => {
      this.campaignId = params.q;
    })
  }

  addOrder(order) {
    console.log(order)
    const {
      buyerUsername,
      buyerEmail,
      meters
    } = order

    this.orderService.newOrder({buyerUsername, buyerEmail, meters, id: this.campaignId})
      .subscribe(res => console.log(res))
      console.log("siiiiii")
  }

}
