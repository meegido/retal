import { Routes } from '@angular/router';
import { SignupformComponent } from './signupform/signupform.component';
import {LoginformComponent} from './loginform/loginform.component';

import {IsLoggedInService} from './services/is-logged-in.canactivate.service';

export const routes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
  { path: 'login',  component: LoginformComponent,  },
  { path: 'signup',  component: SignupformComponent,  },
  { path: '**', redirectTo: '' }
];
