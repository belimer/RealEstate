import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { LandlordModule } from '../landlord/landlord.module';
import { ClientModule } from '../client/client.module';



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
export class AgentModule { }
