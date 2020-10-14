import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: 'salary',
        component: SalaryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
