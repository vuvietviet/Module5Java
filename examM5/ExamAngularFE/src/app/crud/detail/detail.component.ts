import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TourServiceService} from "../../services/tour-service.service";
import {Tour} from "../../models/Tour";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id!: any;
  // formEdit!: FormGroup;
  constructor(private route: ActivatedRoute,public router: Router, public tourService: TourServiceService) { }

  tour: Tour = new Tour("",0,"");
  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      this.showEdit(this.id);
    });
  }


  showEdit(id:any) {
    this.tourService.findById(id).subscribe((data) => {
      this.tour = data;

      // this.formEdit = new FormGroup({
      //   title: new FormControl(this.tour.title, Validators.required),
      //   price: new FormControl(this.tour.price, Validators.required),
      //   description: new FormControl(this.tour.description,Validators.required)
      // })
    })
  }

}
