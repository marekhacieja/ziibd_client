import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployyeeFormComponent } from './employyee-form.component';

describe('EmployyeeFormComponent', () => {
  let component: EmployyeeFormComponent;
  let fixture: ComponentFixture<EmployyeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployyeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployyeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
