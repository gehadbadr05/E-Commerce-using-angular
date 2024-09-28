import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithOutDiscountComponent } from './product-with-out-discount.component';

describe('ProductWithOutDiscountComponent', () => {
  let component: ProductWithOutDiscountComponent;
  let fixture: ComponentFixture<ProductWithOutDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductWithOutDiscountComponent]
    });
    fixture = TestBed.createComponent(ProductWithOutDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
