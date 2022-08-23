import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../../services/product-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public productService: ProductServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    name: new FormControl("", Validators.minLength(10)),
    img: new FormControl("", Validators.minLength(10)),
    price: new FormControl(0, Validators.min(10)),
    status: new FormControl(),
  })

  create() {
    if (this.createForm.valid) {
      console.log(this.createForm.value)
      this.createForm.get("status")?.setValue((this.createForm.get("status")?.value) == 'true' ? true : false);

      this.productService.create(this.createForm.value);
      this.router.navigate(["/"]);
    }
  }

}
