import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './../Models/department-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  formData: Department;

  constructor(
    private http: HttpClient
  ) { }
  // need use live-server plugin or others to create a web server
  readonly APIUrl = 'http://127.0.0.1:5500';

  getDepList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + '/department.json');
  }

}
