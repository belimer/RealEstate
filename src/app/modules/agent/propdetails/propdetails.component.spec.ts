import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropdetailsComponent } from './propdetails.component';

describe('PropdetailsComponent', () => {
  let component: PropdetailsComponent;
  let fixture: ComponentFixture<PropdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
