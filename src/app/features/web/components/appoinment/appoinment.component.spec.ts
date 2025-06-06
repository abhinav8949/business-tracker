import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentComponent } from './appoinment.component';

describe('AppoinmentComponent', () => {
  let component: AppoinmentComponent;
  let fixture: ComponentFixture<AppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoinmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
