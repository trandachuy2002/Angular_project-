import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDsComponent } from './product-ds.component';

describe('ProductDsComponent', () => {
  let component: ProductDsComponent;
  let fixture: ComponentFixture<ProductDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
