import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AgentModule } from '../agent/agent.module';
import { LandlordModule } from '../landlord/landlord.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
    
  ]
})
export class ClientModule { }
