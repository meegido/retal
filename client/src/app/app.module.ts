import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import {routes} from './routes';

import { IsLoggedInService } from './services/is-logged-in.canactivate.service';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignItemComponent } from './campaign-item/campaign-item.component';
import { FabricItemComponent } from './fabric-item/fabric-item.component';

import { CampaignsService } from './services/campaigns.service';
import { FabricsService } from './services/fabrics.service';
import { MyCampaignsComponent } from './my-campaigns/my-campaigns.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    HomeComponent,
    LogoutComponent,
    CampaignsComponent,
    CampaignItemComponent,
    FabricItemComponent,
    MyCampaignsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [
    AuthService,
    IsLoggedInService,
    CampaignsService,
    FabricsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
