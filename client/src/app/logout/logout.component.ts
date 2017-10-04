import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user: object;
  error: string;

  constructor(public auth:AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser()
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user)

  }
}
