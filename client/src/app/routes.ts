import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LogoutComponent } from './logout/logout.component';
//import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

import {IsLoggedInService} from './services/is-logged-in.canactivate.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login',  component: LoginformComponent },
  { path: 'signup',  component: SignupformComponent },
  { path: 'logout',  component: LogoutComponent },
  //{ path: 'campaigns/:id', component: CampaignDetailComponent},
  { path: '**', redirectTo: '' }
];
