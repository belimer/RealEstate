import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { LandlordModule } from '../landlord/landlord.module';
import { ClientModule } from '../client/client.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentRoutingModule } from './agent-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandlordsComponent } from './landlords/landlords.component';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
import { PropertiesComponent } from './properties/properties.component';
=======
import { CategoryComponent } from './category/category.component';
>>>>>>> 3d9f7b24f0c61cce2f17781bdca533019d94b5f6



@NgModule({
<<<<<<< HEAD
  declarations: [DashboardComponent, SidenavComponent, NavbarComponent, LandlordsComponent, PropertiesComponent],
=======
  declarations: [DashboardComponent, SidenavComponent, NavbarComponent, LandlordsComponent, CategoryComponent],
>>>>>>> 3d9f7b24f0c61cce2f17781bdca533019d94b5f6
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule
  ]
})
export class AgentModule { }
