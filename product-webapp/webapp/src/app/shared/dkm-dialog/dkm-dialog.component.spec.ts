import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmDialogComponent } from './dkm-dialog.component';

describe('DkmDialogComponent', () => {
  let component: DkmDialogComponent;
  let fixture: ComponentFixture<DkmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
