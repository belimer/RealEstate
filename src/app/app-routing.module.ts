import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PropDetailsComponent } from './prop-details/prop-details.component';
import { BookRoomComponent } from './book-room/book-room.component';



const routes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {
     path: ':id/view-details',
     component: PropDetailsComponent
   },
   {
     path: ':id/book',
     component: BookRoomComponent
   },
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
