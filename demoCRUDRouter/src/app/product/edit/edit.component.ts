import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductServiceService} from "../../services/product-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  product!: any;
  editForm!: FormGroup;
  constructor(private route: ActivatedRoute, public  productService: ProductServiceService,private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');

      for (let i = 0; i < this.productService.products.length; i++) {
        if (this.productService.products[i].id == this.id) {
          this.product = this.productService.products[i];
        }
      }
    });
    this.editForm = new FormGroup({
      id: new FormControl(this.product.id, Validators.required),
      name: new FormControl(this.product.name, Validators.minLength(10)),
      img: new FormControl(this.product.img, Validators.minLength(10)),
      price: new FormControl(this.product.price, Validators.min(10)),
      status: new FormControl(this.product.status)
    })

  }



  edit() {
    if (this.editForm.valid) {
      console.log(this.editForm.value)
      this.editForm.get("status")?.setValue((this.editForm.get("status")?.value) == 'true' ? true : false);

      this.productService.edit(this.editForm.value);
      this.router.navigate(["/"]);
    }
  }

}
