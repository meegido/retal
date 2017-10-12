import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { OrderService } from '../services/order.service';

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

  current;
  constructor(
    private router:Router,
    private orderS:OrderService
  ) { }

  ngOnInit() {
  }

  addOrder(order) {
    this.current = {
      buyerUsername: order.value.title,
      buyerEmail: order.value.email,
      meters: order.value.meters
    }

    this.orderS.newOrder(this.current)
      .subscribe(res => console.log(res))
      console.log("siiiiii")
  }

}
