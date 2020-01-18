import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Job} from '../../model/job';
import {DataService} from '../../service/data.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  jobObs: Observable<Job>;
  job = new Job();

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.setJobObs();
    this.setJob();
  }

  private setJobObs() {
    this.jobObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getJob(params.get('id')))
    );
  }

  private setJob() {
    this.jobObs.subscribe(job => {
      this.job = job;
    });
  }

  onSubmit(job) {
    this.service.updateJob(job).subscribe();
    this.snackBar.open('Job updated successful', 'OK', {
      duration: 2000,
    });
  }
}

