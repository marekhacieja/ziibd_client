import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployyeeFormComponent} from './form/employee-form/employyee-form.component';
import {TabsComponent} from './tabs/tabs.component';
import {JobFormComponent} from './form/job-form/job-form.component';
import {DepartmentsFormComponent} from './form/departments-form/departments-form.component';
import {CountriesFormComponent} from './form/countries-form/countries-form.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
  },
  {
    path: 'employee/:id',
    component: EmployyeeFormComponent
  },
  {
    path: 'job/:id',
    component: JobFormComponent
  },
  {
    path: 'departments/:id',
    component: DepartmentsFormComponent
  },
  {
    path: 'country/:id',
    component: CountriesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
