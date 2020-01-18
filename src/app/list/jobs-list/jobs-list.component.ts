import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  displayedColumns: string[] = [
    'jobId',
    'jobTitle',
    'minSalary',
    'maxSalary',
    'button'
  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getJobs().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
