import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeServiceService){}
  
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {this.employees = response;},
      (error:HttpErrorResponse) => {alert(error.message);}
    );
  }
}
