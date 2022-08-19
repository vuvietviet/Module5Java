import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBarComponentComponent } from './rating-bar-component.component';

describe('RatingBarComponentComponent', () => {
  let component: RatingBarComponentComponent;
  let fixture: ComponentFixture<RatingBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingBarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
