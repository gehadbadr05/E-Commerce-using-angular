import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firstApp';
  @ViewChild(ProductsComponent) products: ProductsComponent
  constructor() { }
  ngOnInit(): void {
  };

  ngAfterViewIniit() {
    this.products.renderValues;
  }
}



