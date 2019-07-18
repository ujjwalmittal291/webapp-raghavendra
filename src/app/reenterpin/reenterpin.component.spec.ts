import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenterpinComponent } from './reenterpin.component';

describe('ReenterpinComponent', () => {
  let component: ReenterpinComponent;
  let fixture: ComponentFixture<ReenterpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReenterpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReenterpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
