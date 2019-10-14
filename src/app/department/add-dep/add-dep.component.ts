import { DepartmentService } from './../../services/department.service';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {

  constructor(
    public dialogBox: MatDialogRef<AddDepComponent>,
    private service: DepartmentService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      DepartmentID: 0,
      DepartmentName: ''
    };
  }

  onClose() {
    this.dialogBox.close();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
