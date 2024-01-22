import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDivComponent } from './info-div.component';

describe('InfoDivComponent', () => {
  let component: InfoDivComponent;
  let fixture: ComponentFixture<InfoDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
