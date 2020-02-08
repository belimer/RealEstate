import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlorddetailsComponent } from './landlorddetails.component';

describe('LandlorddetailsComponent', () => {
  let component: LandlorddetailsComponent;
  let fixture: ComponentFixture<LandlorddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlorddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlorddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
