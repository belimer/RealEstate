import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandlordRoutingModule } from './landlord-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [ DashboardComponent, SidenavComponent, NavbarComponent ],
	imports: [ CommonModule, LandlordRoutingModule ]
})
export class LandlordModule {}
