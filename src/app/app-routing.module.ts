import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exchange', component: NotImplementedComponent },
  { path: 'buysell', component: NotImplementedComponent },
  { path: 'transactions', component: NotImplementedComponent },
  { path: 'configuration', component: NotImplementedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
