import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarklineChartComponent } from './markline-chart.component';

describe('MarklineChartComponent', () => {
  let component: MarklineChartComponent;
  let fixture: ComponentFixture<MarklineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarklineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarklineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
