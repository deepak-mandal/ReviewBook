import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmCustomTabComponent } from './dkm-custom-tab.component';

describe('DkmCustomTabComponent', () => {
  let component: DkmCustomTabComponent;
  let fixture: ComponentFixture<DkmCustomTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkmCustomTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkmCustomTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
