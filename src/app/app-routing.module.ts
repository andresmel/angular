import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'country/:name', component: CountryListComponent },
  { path: 'country', component: CountryListComponent },
  { path: 'dashboard', component: DashboardComponent  },
  { path: '', component: DashboardComponent  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
