import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  displayedColumns: string[] = [
    'employeeId',
    'firstName',
    'lastName',
    'email',
    'jobId',
    'salary',
    'commissionPct',
    'managerId',
    'phoneNumber',
    'button'
  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getEmployees().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}

