import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  displayedColumns: string[] = [
    'countryId',
    'countryName',
    'regionId',
    'button'
  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getCountries().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
