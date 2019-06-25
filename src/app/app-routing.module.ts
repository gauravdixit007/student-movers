import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

const routes: Routes = [
  {path: 'employees/:id', component: EmployeesListComponent},
  {path: 'jobs', component: JobsListComponent},
  {path: '**' , component: JobsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
