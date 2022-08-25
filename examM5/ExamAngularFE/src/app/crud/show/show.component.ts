import { Component, OnInit } from '@angular/core';
import {TourServiceService} from "../../services/tour-service.service";
import {Tour} from "../../models/Tour";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
tours: any[] = [];
message?: any;
  constructor(private route: ActivatedRoute, private tourService: TourServiceService, private http: HttpClient) {
    this.findAll();
  }

  findAll() {
    this.http.get<Tour[]>('http://localhost:3000/tuors').subscribe(data => {
      this.tours = data;
    }, error => {

    })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.message = paramMap.get('message');
    });
  }

}
