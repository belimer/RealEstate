import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { ListpropertyComponent } from './listproperty/listproperty.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PaymentsComponent } from './payments/payments.component';


const routes: Routes = [
  {
    path: ':id/dashboard',
    component: DashboardComponent
  },
  {
    path: ':id/myproperties',
    component: MypropertiesComponent
  },
  {
    path: 'addproperty',
    component: AddpropertyComponent},
    {
    path: ':id/listproperty',
    component: ListpropertyComponent
  },
  {
    path: ':id/uploadimage',
    component: UploadImageComponent
  },
  {
    path: ':id/propertydetails',
    component: PropertyDetailsComponent
  },
  {
    path: ':id/payments',
    component: PaymentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandlordRoutingModule { }
