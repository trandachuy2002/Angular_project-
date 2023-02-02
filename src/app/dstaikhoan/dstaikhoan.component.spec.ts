import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstaikhoanComponent } from './dstaikhoan.component';

describe('DstaikhoanComponent', () => {
  let component: DstaikhoanComponent;
  let fixture: ComponentFixture<DstaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstaikhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DstaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
