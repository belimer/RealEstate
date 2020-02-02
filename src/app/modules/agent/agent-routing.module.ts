import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandlordsComponent } from './landlords/landlords.component';

import { PropertiesComponent } from './properties/properties.component';
import { CategoryComponent } from './category/category.component';
import { UploadFileComponent } from './upload-file/upload-file.component';


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
    component: PropertiesComponent},
    {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'upload',
    component: UploadFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
