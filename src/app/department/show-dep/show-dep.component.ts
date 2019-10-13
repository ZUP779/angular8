import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  listData : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options', 'DepartmentID', 'DepartmentName'];
  

  constructor() { }

  ngOnInit() {
  }

}
