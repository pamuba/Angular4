import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlueColorDirective } from './blue-color.directive';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './employee.service'
import { EmployeeDetailComponent } from './employee-detail.component';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';
import { Emp1Component } from './emp1.component'

@NgModule({
  declarations: [
    AppComponent,
    BlueColorDirective,
    EmployeeDetailComponent,
    HomeComponent,
    EmpComponent,
    Emp1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers:[EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
