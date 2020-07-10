import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class EmployeeService{
    constructor(public http:HttpClient){}

    private _url:string = "/assets/employeedata.json"
    getEmployees(){
        return this.http.get(this._url)
                 .map((response:Response)=>response);
    }
}