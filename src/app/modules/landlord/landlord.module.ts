import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandlordRoutingModule } from './landlord-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { ListpropertyComponent } from './listproperty/listproperty.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { SharedModule } from '../shared/shared.module';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PaymentsComponent } from './payments/payments.component';
import { ExitComponent } from './exit/exit.component';

@NgModule({
	declarations: [
		DashboardComponent,
		SidenavComponent, 
		NavbarComponent, 
		AddpropertyComponent,
		MypropertiesComponent,
		ListpropertyComponent, 
		UploadImageComponent,
		PropertyDetailsComponent,
		PaymentsComponent,
		ExitComponent
	],
	imports: [CommonModule, LandlordRoutingModule, SharedModule]
})
export class LandlordModule { }
