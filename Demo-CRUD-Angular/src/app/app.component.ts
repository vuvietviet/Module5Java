import { Component } from '@angular/core';
import {Product} from "../models/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-CRUD-Angular';
  products: Product[] = [];
  product: Product = new Product(0,"","",0);

  constructor() {
    this.products.push(new Product(1,"oto","https://st.quantrimang.com/photos/image/2019/10/31/hinh-nen-o-to-dep-5.jpg",600))
    this.products.push(new Product(2,"car","https://storage.googleapis.com/f1-cms/2020/08/b93bd613-20200826_092520.jpg",500))
    this.products.push(new Product(3,"sports car","https://menback.com/wp-content/uploads/2022/01/xe-o-to-dat-nhat-the-gioi-menback.jpg",700))
  }

  create(): void{
    this.products.push(this.product);
    this.product = new Product(0,"","",0);
  }

  delete(index: number): void{
    this.products.splice(index,1);
  }


  showEdit(index: number): void{
    this.product = this.products[index];
     }

  edit(): void{
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == this.product.id)  {
        this.products[i] = this.product;
      }
      }
  }
}
