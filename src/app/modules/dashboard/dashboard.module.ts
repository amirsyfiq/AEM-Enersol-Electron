import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { ChartDonutComponent } from './components/chart-donut/chart-donut.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { TableUserComponent } from './components/table-user/table-user.component';

@NgModule({
  declarations: [HomeDashboardComponent, HeaderComponent, ChartDonutComponent, ChartBarComponent, TableUserComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
