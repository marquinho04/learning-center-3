import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateExamsComponent } from './mental-state-exams.component';

describe('MentalStateExamsComponent', () => {
  let component: MentalStateExamsComponent;
  let fixture: ComponentFixture<MentalStateExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalStateExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalStateExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
