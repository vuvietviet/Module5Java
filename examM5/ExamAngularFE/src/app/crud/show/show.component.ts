import { Component, OnInit } from '@angular/core';
import {TourServiceService} from "../../services/tour-service.service";
import {Tour} from "../../models/Tour";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
tours: any[] = [];
search: string = "";
message?: any;
  constructor(private route: ActivatedRoute, private tourService: TourServiceService, private http: HttpClient) {
    this.tourService.findAll().subscribe(data => {
          this.tours = data;
        }, error => {

        })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.message = paramMap.get('message');
    });
  }

  searchTour(input : any) {
    this.tourService.findAll().subscribe((data) => {
      let toursSearch:Tour[]=[]
      for (const d of data) {
        if (d.title?.toLowerCase().normalize('NFD') .replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(input.toLowerCase().normalize('NFD') .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D'))){
          toursSearch.push(d)
        }
      }

      this.tours=toursSearch;
    })
  }

}
