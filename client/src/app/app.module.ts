import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {routes} from './routes';
import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/is-logged-in.canactivate.service';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
