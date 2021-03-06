import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  formInfo = {
    username: "",
    password: "",
    email: ""
  }
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signup() {
    const { username, password, email } = this.formInfo;
    if(username != "" && password != "" && email != ""){
      console.log(`Signup with ${username} ${password} ${email}`)
      this.auth.signup(username, password, email)
      .map(user => console.log(user))
      .subscribe();
    } else {
      console.log("You must set a username, email and a password");
    }
  }

}
