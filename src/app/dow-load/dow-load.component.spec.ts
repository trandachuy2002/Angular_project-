import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowLoadComponent } from './dow-load.component';

describe('DowLoadComponent', () => {
  let component: DowLoadComponent;
  let fixture: ComponentFixture<DowLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
