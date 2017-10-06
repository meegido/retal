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
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignService } from './services/campaign.service';
import { CampaignDetailService } from './services/campaign-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    HomeComponent,
    LogoutComponent,
    CampaignsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    IsLoggedInService,
    CampaignService,
    CampaignDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
