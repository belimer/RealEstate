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
import { PropertiesComponent } from './properties/properties.component';
import { CategoryComponent } from './category/category.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantdetailsComponent } from './tenantdetails/tenantdetails.component';



@NgModule({
  declarations: [DashboardComponent, SidenavComponent, TenantsComponent, NavbarComponent, LandlordsComponent, PropertiesComponent,
     CategoryComponent,
     UploadFileComponent,
     TenantdetailsComponent],
 
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule
  ]
})
export class AgentModule { }
