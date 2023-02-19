import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductDialogComponent } from './add-new-product-dialog.component';

describe('AddNewProductDialogComponent', () => {
  let component: AddNewProductDialogComponent;
  let fixture: ComponentFixture<AddNewProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProductDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
