import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmCardComponent } from './dkm-card.component';

describe('DkmCardComponent', () => {
  let component: DkmCardComponent;
  let fixture: ComponentFixture<DkmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkmCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
