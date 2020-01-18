import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
  displayedColumns: string[] = [
    'departmentId',
    'departmentName',
    'managerId',
    'locationId',
    'button'
  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getDepartments().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
