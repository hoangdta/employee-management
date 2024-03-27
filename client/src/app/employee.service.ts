import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:8080/api/v1';
  private httpClient;

  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  getEmployeesList() : Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  addEmployee(employee: Employee) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add-employee`, employee);
  }

  getEmployeeById(id: number) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/employee/${id}`);
  }

  updateEmployee(id: number, employee: Employee) : Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseURL}/employee/${id}`, employee);
  }

  deleteEmployee(id: number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/employee/${id}`);
  }

}
