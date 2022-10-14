import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TasksComponent} from "./tasks/tasks.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {CommitsComponent} from "./commits/commits.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: "full"
  },
  {
    path: 'tasks',
    component: TasksComponent,
    pathMatch: "full"
  },
  {
    path: 'stats',
    component: StatisticsComponent,
    pathMatch: "full"
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    pathMatch: "full"
  },
  {
    path: 'commits',
    component: CommitsComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
