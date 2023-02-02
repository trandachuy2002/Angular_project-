import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutSuaComponent } from './produt-sua.component';

describe('ProdutSuaComponent', () => {
  let component: ProdutSuaComponent;
  let fixture: ComponentFixture<ProdutSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutSuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
