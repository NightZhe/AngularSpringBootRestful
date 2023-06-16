import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTranctionStockComponent } from './daily-tranction-stock.component';

describe('DailyTranctionStockComponent', () => {
  let component: DailyTranctionStockComponent;
  let fixture: ComponentFixture<DailyTranctionStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyTranctionStockComponent]
    });
    fixture = TestBed.createComponent(DailyTranctionStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
