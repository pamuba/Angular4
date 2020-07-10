import { Component, Inject, InjectionToken, OnInit } from '@angular/core'
import { EmployeeService } from './employee.service'
import { HttpClient} from '@angular/common/http'

const EMPLOYEE_SERVICE = new InjectionToken<EmployeeService>('EMPLOYEE_SERVICE');

function EmployeeServiceProvider(http:HttpClient):EmployeeService{
    return new EmployeeService(http);
}

@Component({
    selector:'employee-detail',
    template:`<h2>Employee Detail</h2>
    <ul *ngFor="let emp of employees">
        <li>{{emp.code}} {{emp.name}} {{emp.dateOfBirth}}</li>
    </ul>`,
    providers:[
        {
            provide:EMPLOYEE_SERVICE,
            useFactory:EmployeeServiceProvider,
            deps:[HttpClient]
        }
    ]
})
export class EmployeeDetailComponent{

    employees:any = []
    constructor(@Inject(EMPLOYEE_SERVICE) private _employeeService:EmployeeService){}

    ngOnInit(){
        this._employeeService.getEmployees()
                            .subscribe((resEmployeeData)=>{this.employees = resEmployeeData})
    }
}