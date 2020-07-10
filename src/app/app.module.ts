import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlueColorDirective } from './blue-color.directive';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './employee.service'
import { EmployeeDetailComponent } from './employee-detail.component';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';
import { Emp1Component } from './emp1.component'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';


const appRoutes:Routes=[
  {path:"", component:LoginFormComponent},
  {path:"dashboard", canActivate:[AuthguardGuard],  component:DashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    BlueColorDirective,
    EmployeeDetailComponent,
    HomeComponent,
    EmpComponent,
    Emp1Component,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers:[EmployeeService, UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
