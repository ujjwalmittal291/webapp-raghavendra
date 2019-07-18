import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcreationComponent } from './idcreation.component';

describe('IdcreationComponent', () => {
  let component: IdcreationComponent;
  let fixture: ComponentFixture<IdcreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdcreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
