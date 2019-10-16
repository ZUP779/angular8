import { DepartmentService } from './../../services/department.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
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
    private service: DepartmentService,
    private snackBar: MatSnackBar,
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
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    // this.service.addDepartment(form.value).subscribe(data => {
    //   this.resetForm(form);
    //   this.snackBar.open(data.toString(), '',  {
    //     duration: 3000,
    //     verticalPosition: 'top'
    //   });
    // });
    this.resetForm();
    this.snackBar.open('snackbar work', '',  {
        duration: 3000,
        verticalPosition: 'top'
      });
  }
}
