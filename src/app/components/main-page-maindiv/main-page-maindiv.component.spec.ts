import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMaindivComponent } from './main-page-maindiv.component';

describe('MainPageMaindivComponent', () => {
  let component: MainPageMaindivComponent;
  let fixture: ComponentFixture<MainPageMaindivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageMaindivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageMaindivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
