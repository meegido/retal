import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    }
    user: object;
    message: string;
  constructor(
    public auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  login() {
   const {username, password} = this.formInfo;
   if(username != "" && password != ""){
     console.log(`Login with ${username} ${password}`)
     this.auth.login(username, password)
     .map(user => console.log(user))
     .subscribe(
      (user) => this.router.navigate(['/my-campaigns']),
      (err) => this.message = err)

   } else {
     console.log("You must set a username and a password")
     this.message = "You must set a username and a password";
   }
 }

}
