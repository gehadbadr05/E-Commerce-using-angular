import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithDiscountComponent } from './product-with-discount.component';

describe('ProductWithDiscountComponent', () => {
  let component: ProductWithDiscountComponent;
  let fixture: ComponentFixture<ProductWithDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductWithDiscountComponent]
    });
    fixture = TestBed.createComponent(ProductWithDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
