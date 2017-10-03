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
    console.log(this.user)
  }

  logout() {
   this.auth.logout()
     .subscribe(
       () => this.user = null,
       (err) => this.error = err
     );

 }

}
