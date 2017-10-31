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
  campaignId: string;
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
    meters: 0,
    campaignId: ""
  }
  current;
  campaignId;
  successMessage: String;
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
    const {
      buyerUsername,
      buyerEmail,
      meters,
      campaignId
    } = order

    this.orderService.newOrder({ buyerUsername, buyerEmail, meters, campaignId })
      .map(success => this.successMessage = "¡Pedido enviado con éxito!")
      .subscribe(success => this.router.navigate(['home']))
  }

}
