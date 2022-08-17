import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloComponent } from './clo.component';

describe('CloComponent', () => {
  let component: CloComponent;
  let fixture: ComponentFixture<CloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
