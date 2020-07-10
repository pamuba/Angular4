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
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component'

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
