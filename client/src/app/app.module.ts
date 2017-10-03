import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {routes} from './routes';
import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/is-logged-in.canactivate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
