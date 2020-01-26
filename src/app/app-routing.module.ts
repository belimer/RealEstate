import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';



const routes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'auth',
    loadChildren: './modules/authentication/authentication.module#AuthenticationModule'  
  },
  {path: 'tenant',
    loadChildren: './modules/client/client.module#ClientModule'  
  },
  {path: 'landlord',
    loadChildren: './modules/landlord/landlord.module#LandlordModule'  
  },
  {path: 'agent',
    loadChildren: './modules/agent/agent.module#AgentModule'  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
