import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConcernsComponent } from './concerns/concerns.component';
import { PayrentComponent } from './payrent/payrent.component';


const routes: Routes = [
  {
    path: ':id/dashboard',
    component: DashboardComponent
  },
  {
    path: ':id/concerns',
    component: ConcernsComponent
  },
  {
    path: ':id/pay/rent',
    component: PayrentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
