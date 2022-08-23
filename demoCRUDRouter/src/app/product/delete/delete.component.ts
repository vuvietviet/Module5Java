import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductServiceService} from "../../services/product-service.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: any;
  constructor(private route: ActivatedRoute, public  productService: ProductServiceService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      alert(this.id)
    });
  }

  delete(check: boolean) {
    if (check) {
      this.productService.delete(this.id);
    }
    this.router.navigate(["/"]);
  }

}
