import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LandlordsComponent } from './landlords/landlords.component'

import { PropertiesComponent } from './properties/properties.component'
import { CategoryComponent } from './category/category.component'
import { UploadFileComponent } from './upload-file/upload-file.component'
import { TenantsComponent } from './tenants/tenants.component'
import { TenantdetailsComponent } from './tenantdetails/tenantdetails.component'
import { LandlorddetailsComponent } from './landlorddetails/landlorddetails.component'
import { AddPropertyComponent } from './add-property/add-property.component'
import { PropDetailsComponent } from 'src/app/prop-details/prop-details.component'
import { PropdetailsComponent } from './propdetails/propdetails.component'

const routes: Routes = [
  {
    path: ':id/dashboard',
    component: DashboardComponent
  },
  {
    path: 'landlords',
    component: LandlordsComponent
  },
  {
    path: 'properties',
    component: PropertiesComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'properties/:id/upload',
    component: UploadFileComponent
  },
  {
    path: 'tenants',
    component: TenantsComponent
  },
  {
    path: 'tenant/:id/view',
    component: TenantdetailsComponent
  },
  {
    path: 'landlord/:id/view',
    component: LandlorddetailsComponent
  },
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
	  path: 'properties/:id/view',
	  component: PropdetailsComponent
  },
	
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {}
