import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './../Models/department-model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _listners = new Subject<any>();
  formData: Department;

  constructor(
    private http: HttpClient
  ) { }
  // need use live-server plugin or others to create a web server
  readonly APIUrl = 'http://127.0.0.1:5500';

  getDepList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + '/department.json');
  }
  addDepartment(dep: Department) {
    return this.http.post(this.APIUrl + '/department.json', dep);
  }

  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
