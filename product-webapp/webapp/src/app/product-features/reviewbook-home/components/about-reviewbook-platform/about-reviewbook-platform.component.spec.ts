import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutReviewbookPlatformComponent } from './about-reviewbook-platform.component';

describe('AboutReviewbookPlatformComponent', () => {
  let component: AboutReviewbookPlatformComponent;
  let fixture: ComponentFixture<AboutReviewbookPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutReviewbookPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutReviewbookPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
