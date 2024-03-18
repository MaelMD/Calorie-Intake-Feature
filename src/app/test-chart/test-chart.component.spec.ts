import { ComponentFixture, TestBed } from '@angular/core/testing';

import { testChart } from './test-chart.component';

describe('testChart', () => {
  let component: testChart;
  let fixture: ComponentFixture<testChart>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [testChart]
    });
    fixture = TestBed.createComponent(testChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
