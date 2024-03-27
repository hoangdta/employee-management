import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id!: number;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void { 
    this.id =  this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  };

  private updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.redirectToList();
    },
    error => console.log(error));
  }

  private redirectToList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.updateEmployee();
  };
}
