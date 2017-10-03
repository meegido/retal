import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

interface LoginForm {
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})

export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
      username: "",
      password: ""
    };

    user: any;
    error: string;

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  login() {
   const {username, password} = this.formInfo;
   if(username != "" && password != ""){
     console.log(`Login with ${username} ${password}`)
     this.auth.login(username, password)
     .map(user => console.log(user))
     .subscribe();
   } else{
     console.log("You must set a username and a password");
   }
 }

 logout() {
  this.auth.logout()
    .subscribe(
      () => this.user = null,
      (err) => this.error = err
    );
}

}
