import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandlordRoutingModule } from './landlord-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [ DashboardComponent, SidenavComponent, NavbarComponent, MypropertiesComponent, AddpropertyComponent ],
	imports: [ 
		CommonModule, 
		LandlordRoutingModule,
		SharedModule
	 ]
})
export class LandlordModule {}
