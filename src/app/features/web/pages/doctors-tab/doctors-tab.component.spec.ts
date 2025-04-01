import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsTabComponent } from './doctors-tab.component';

describe('DoctorsTabComponent', () => {
  let component: DoctorsTabComponent;
  let fixture: ComponentFixture<DoctorsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
