import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincreationComponent } from './pincreation.component';

describe('PincreationComponent', () => {
  let component: PincreationComponent;
  let fixture: ComponentFixture<PincreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
