import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TourServiceService} from "../../services/tour-service.service";
import {Tour} from "../../models/Tour";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id!: any;
  formDelete!: FormGroup;
  message: string = "Xóa thành công";
  constructor(private route: ActivatedRoute,public router: Router, public tourService: TourServiceService) { }

  tour: Tour = new Tour("",0,"");
  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      this.showDelete(this.id);
    });
  }

  delete(check: boolean) {
    if (check) {
      this.tourService.delete(this.id).subscribe(() => {
        this.router.navigate(["/" + this.message]);
      })
    }
  }

  showDelete(id:any) {
    this.tourService.findById(id).subscribe((data) => {
      this.tour = data;

      this.formDelete = new FormGroup({
        title: new FormControl(this.tour.title, Validators.required),
        price: new FormControl(this.tour.price, Validators.required),
        description: new FormControl(this.tour.description,Validators.required)
      })
    })
  }
}
