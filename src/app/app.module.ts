import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './list/employees-list/employees-list.component';
import { JobsListComponent } from './list/jobs-list/jobs-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule,
  MatSelectModule, MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { EmployyeeFormComponent } from './form/employee-form/employyee-form.component';
import { TabsComponent } from './tabs/tabs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JobFormComponent } from './form/job-form/job-form.component';
import { NewEmployeeComponent } from './insert/new-employee/new-employee.component';
import { NewJobComponent } from './insert/new-job/new-job.component';
import { DepartmentsListComponent } from './list/departments-list/departments-list.component';
import { DepartmentsFormComponent } from './form/departments-form/departments-form.component';
import { CountriesListComponent } from './list/countries-list/countries-list.component';
import { CountriesFormComponent } from './form/countries-form/countries-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    JobsListComponent,
    EmployyeeFormComponent,
    TabsComponent,
    JobFormComponent,
    NewEmployeeComponent,
    NewJobComponent,
    DepartmentsListComponent,
    DepartmentsFormComponent,
    CountriesListComponent,
    CountriesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
