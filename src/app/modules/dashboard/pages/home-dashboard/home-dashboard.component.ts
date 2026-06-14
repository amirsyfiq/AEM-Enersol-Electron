import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ChartBar, ChartDonut, Dashboard, TableUser } from '../../models/dashboard.model';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
  donutData: ChartDonut[] = [];
  barData: ChartBar[] = [];
  userData: TableUser[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.initDashboard();
  }

  initDashboard() {
    this.dashboardService.dashboard().subscribe({
      next: (response: Dashboard) => {
        if (response.success) {
          this.donutData = response.chartDonut;
          this.barData = response.chartBar;
          this.userData = response.tableUsers;
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    });
  }
}