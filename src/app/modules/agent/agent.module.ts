import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { LandlordModule } from '../landlord/landlord.module';
import { ClientModule } from '../client/client.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentRoutingModule } from './agent-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
  ]
})
export class AgentModule { }
