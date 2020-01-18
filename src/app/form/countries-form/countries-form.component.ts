import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DataService} from '../../service/data.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';
import {Countries} from '../../model/countries';

@Component({
  selector: 'app-countries-form',
  templateUrl: './countries-form.component.html',
  styleUrls: ['./countries-form.component.scss']
})
export class CountriesFormComponent implements OnInit {
  countryObs: Observable<Countries>;
  country = new Countries();

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setCountryObs();
    this.setCountry();
  }

  private setCountryObs() {
    this.countryObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCountry(params.get('id')))
    );
  }

  private setCountry() {
    this.countryObs.subscribe(country => {
      this.country = country;
    });
  }

  onSubmit(country) {
    this.service.updateCountry(country).subscribe();
    this.snackBar.open('Country updated successful', 'OK', {
      duration: 2000,
    });
  }
}
