import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandlordsComponent } from './landlords/landlords.component';
import { CategoryComponent } from './category/category.component';


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
    path: 'categories',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
