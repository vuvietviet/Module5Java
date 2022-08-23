import { Component, OnInit } from '@angular/core';
import {Register} from "../../model/Register";
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  registers: Register[] = [];
  message!: string;

  formRegister!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(6)]),
      confirmPassword:new FormControl("",[Validators.required, Validators.minLength(6)]),
      country:new FormControl("",[Validators.required]),
      age:new FormControl("",[Validators.required,Validators.min(18)]),
      gender:new FormControl("",[Validators.required]),
      phone:new FormControl("",[Validators.required,Validators.pattern("^0\\d{9,10}$")])
    })


  }
 create() {
   console.log(this.formRegister);
   if (this.formRegister.valid) {
     console.log("create");
     this.registers.push(this.formRegister.value);
     this.message = "Register success";
   }
 }
}

// function comparePassword(c: AbstractControl) {
//   const v = c.value;
//   return (v.password === v.confirmPassword)? null : {
//     passwordnotmatch : true
//   };
// }
