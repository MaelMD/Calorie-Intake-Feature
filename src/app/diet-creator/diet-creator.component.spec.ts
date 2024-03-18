import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietCreatorComponent } from './diet-creator.component';

describe('DietCreatorComponent', () => {
  let component: DietCreatorComponent;
  let fixture: ComponentFixture<DietCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietCreatorComponent]
    });
    fixture = TestBed.createComponent(DietCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
