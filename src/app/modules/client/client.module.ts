import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AgentModule } from '../agent/agent.module';
import { LandlordModule } from '../landlord/landlord.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientRoutingModule } from './client-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ConcernsComponent } from './concerns/concerns.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidenavComponent, ConcernsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
    
  ]
})
export class ClientModule { }
