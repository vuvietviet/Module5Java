import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  result = 0;
  constructor() { }

  ngOnInit(): void {
  }

  add(num1: string, num2: string){
    this.num1 = parseInt(num1);
    this.num2 = parseInt(num2);
    this.result = this.num1 + this.num2;
  }

  sub(num1: string, num2: string){
    this.num1 = parseInt(num1);
    this.num2 = parseInt(num2);
    this.result = this.num1 - this.num2;
  }

  mul(num1: string, num2: string){
    this.num1 = parseInt(num1);
    this.num2 = parseInt(num2);
    this.result = this.num1 * this.num2;
  }

  div(num1: string, num2: string){
    this.num1 = parseInt(num1);
    this.num2 = parseInt(num2);
    this.result = this.num1 / this.num2;
  }
}
