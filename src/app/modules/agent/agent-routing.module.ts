import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandlordsComponent } from './landlords/landlords.component';
<<<<<<< HEAD
import { PropertiesComponent } from './properties/properties.component';
=======
import { CategoryComponent } from './category/category.component';
>>>>>>> 3d9f7b24f0c61cce2f17781bdca533019d94b5f6


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
<<<<<<< HEAD
    path: 'properties',
    component: PropertiesComponent
=======
    path: 'categories',
    component: CategoryComponent
>>>>>>> 3d9f7b24f0c61cce2f17781bdca533019d94b5f6
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
