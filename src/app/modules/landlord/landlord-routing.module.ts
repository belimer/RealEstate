import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListpropertyComponent } from './listproperty/listproperty.component';


const routes: Routes = [
  {
    path: ':id/dashboard',
    component: DashboardComponent
  },
  {
    path: ':id/listproperty',
    component: ListpropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandlordRoutingModule { }
