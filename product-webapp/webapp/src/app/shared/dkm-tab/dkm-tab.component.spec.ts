import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmTabComponent } from './dkm-tab.component';

describe('DkmTabComponent', () => {
  let component: DkmTabComponent;
  let fixture: ComponentFixture<DkmTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkmTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
