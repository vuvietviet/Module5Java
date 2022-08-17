import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clo',
  templateUrl: './clo.component.html',
  styleUrls: ['./clo.component.css']
})
export class CloComponent implements OnInit {
  color : string = "red";
  constructor() { }

  ngOnInit(): void {
  }
  changColor(color:string) {
    this.color = color;
  }
}
