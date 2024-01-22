import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixStepsComponent } from './six-steps.component';

describe('SixStepsComponent', () => {
  let component: SixStepsComponent;
  let fixture: ComponentFixture<SixStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SixStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
