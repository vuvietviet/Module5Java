import { Injectable } from '@angular/core';
import {Product} from "../../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Product[] = [];

  constructor() {
    this.products.push(new Product(1, "oto", "https://st.quantrimang.com/photos/image/2019/10/31/hinh-nen-o-to-dep-5.jpg", 500, true))
    this.products.push(new Product(2, "oto", "https://storage.googleapis.com/f1-cms/2020/08/b93bd613-20200826_092520.jpg", 500, false))
    this.products.push(new Product(3, "oto", "https://menback.com/wp-content/uploads/2022/01/xe-o-to-dat-nhat-the-gioi-menback.jpg", 500, true))
  }

  create(product: any): void {
    this.products.push(product);
    console.log(this.products)
  }

  edit(product: any): void {
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == product.id){
        this.products[i] = product;
      }
    }
  }

  delete(id: any): void {
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == id){
        this.products.splice(i,1);
      }
    }
  }
}
