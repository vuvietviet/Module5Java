import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Tour} from "../../models/Tour";
import {TourServiceService} from "../../services/tour-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formCreate!: FormGroup;
  message: string = "Tạo thành công";
  constructor(public router: Router, public tourService: TourServiceService) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      title: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      description: new FormControl("",Validators.required)
    })
  }

  create() {
    if(this.formCreate.valid) {
      this.tourService.create(this.formCreate.value).subscribe(() => {
        this.router.navigate(["/" + this.message]);
      })
    } else {
      alert("Không được để trống các ô");
    }
  }
}
