import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Employee} from '../../model/employee';
import {DataService} from '../../service/data.service';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-employyee-form',
  templateUrl: './employyee-form.component.html',
  styleUrls: ['./employyee-form.component.scss']
})
export class EmployyeeFormComponent implements OnInit {
  employeeObs: Observable<Employee>;
  employee = new Employee();

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setEmployeeObs();
    this.setEmployee();
  }

  private setEmployeeObs() {
    this.employeeObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEmployee(params.get('id')))
    );
  }

  private setEmployee() {
    this.employeeObs.subscribe(employee => {
      this.employee = employee;
    });
  }

  onSubmit(data) {
    this.service.updateEmployee(data).subscribe();
    this.snackBar.open('employee updated successful', 'OK', {
      duration: 2000,
    });
  }

}
