
import { Component } from '@angular/core';
import { Iproduct } from "./../Shared Classes and types/shared";
import { ICategory } from "./../Shared Classes and types/shared";
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';


enum DiscountOffers {
  NoDiscount = "No Discount",
  TenPercent = "0.1",
  FifteenPercent = "15%"
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  Discount: DiscountOffers
  Storename: string
  storeLogo: string;
  ProductList: Iproduct[];
  CategoryList: ICategory[];
  ClientName: string
  IsPurchased: boolean;
  hasOffer: boolean = true;
  table: boolean;

  constructor(private productservice: ProductServiceService,private route: ActivatedRoute) {
    this.Discount = DiscountOffers.TenPercent;
    this.Storename = "Women Fashion";
    this.storeLogo = "../../assets/logo2.avif";
    this.ProductList = [{
      ID: 1,
      Name: "Clothess",
      Quantity: 50,
      Price: 500,
      Img: "../../assets/100.jpg"

    }, {
      ID: 2,
      Name: "Shoes ",
      Quantity: 30,
      Price: 800,
      Img: "../../assets/12.jpg"

    }, {
      ID: 3,
      Name: "Bags ",
      Quantity: 40,
      Price: 900,
      Img: "../../assets/111.jpg"

    }];
    this.CategoryList = [{ ID: 10, Name: "Clotheses" }, { ID: 20, Name: "Bags" }, { ID: 30, Name: "Shoes" }]

    this.ClientName = "  ";
    this.IsPurchased = false;
  }

  Products: any = [];
  errorMessage: any;
  Buy() {
    this.IsPurchased = true;
    this.table = false;

  };

  renderValues() {
    console.log("gehad");
  };

  showTable() {
    this.table = !this.table;
  }

  ngOnInit(): void {

    this.ProductList = this.productservice.getAllProducts();
  };
  getId(): void {
    let btn = document.getElementById("btn") as HTMLInputElement;
   this.ProductList = [];
  
   this.ProductList.push(this.productservice.getProductById(parseFloat(btn.value)));
   console.log(this.ProductList);
    this.table = true;
};

const= this.route.snapshot.data['discount'];

}




