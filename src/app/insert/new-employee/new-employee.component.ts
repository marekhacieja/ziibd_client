import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {DataService} from '../../service/data.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  employee = new Employee();

  constructor(private service: DataService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onSubmit(employee: Employee) {
    console.log(employee);
    this.service.saveEmployee(employee).subscribe();
    this.snackBar.open('Employee added successful', 'OK', {
      duration: 2000,
    });
  }
}
