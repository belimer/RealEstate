import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandlordRoutingModule } from './landlord-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
    declarations: [DashboardComponent, SidenavComponent],
    imports: [CommonModule, LandlordRoutingModule]
})
export class LandlordModule {}
