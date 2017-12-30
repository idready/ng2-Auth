import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { CallbackComponent } from './callback.component';
import { AuthService } from './auth/auth.service';
import { DealService } from './deal.service';

@NgModule({
  declarations: [
    AppComponent,
    PrivateDealsComponent,
    PublicDealsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, DealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
