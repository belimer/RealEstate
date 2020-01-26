import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AgentModule } from '../agent/agent.module';
import { LandlordModule } from '../landlord/landlord.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationModule,
    AgentModule,
    LandlordModule,
    ClientModule
  ]
})
export class ClientModule { }
