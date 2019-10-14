import { AddDepComponent } from './../add-dep/add-dep.component';
import { DepartmentService } from './../../services/department.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Department } from 'src/app/Models/department-model';

import { MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Options', 'DepartmentID', 'DepartmentName'];

  constructor(
    private service: DepartmentService,
    private dialog: MatDialog,
  ) { }

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {
    this.refreshDepartmentList();
  }

  refreshDepartmentList() {
    // const dummyData = [
    //   {
    //     DepartmentID: 1,
    //     DepartmentName: 'IT'
    //   },
    //   {
    //     DepartmentID: 2,
    //     DepartmentName: 'IT'
    //   }
    // ];

    // this.listData = new MatTableDataSource(dummyData);
    this.service.getDepList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLocaleLowerCase();
  }

  onEdit(dep: Department) {
    console.log(dep);
  }

  onDelete(depID: number) {
    console.log(depID);
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(AddDepComponent, dialogConfig);
  }
}
