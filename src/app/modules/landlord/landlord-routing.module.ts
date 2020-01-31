import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';


const routes: Routes = [
  {
    path: ':id/dashboard',
    component: DashboardComponent
  },
  {
    path: 'myproperties',
    component: MypropertiesComponent
  },
  {
    path: 'addproperty',
    component: AddpropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandlordRoutingModule { }
