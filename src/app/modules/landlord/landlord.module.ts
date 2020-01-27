import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AgentModule } from '../agent/agent.module';
import { ClientModule } from '../client/client.module';
import { LandlordRoutingModule } from './landlord-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandlordRoutingModule
  ]
})
export class LandlordModule { }
