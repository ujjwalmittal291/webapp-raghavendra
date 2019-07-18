import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritypinComponent } from './securitypin.component';

describe('SecuritypinComponent', () => {
  let component: SecuritypinComponent;
  let fixture: ComponentFixture<SecuritypinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritypinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritypinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
