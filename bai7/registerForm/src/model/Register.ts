export class Register{
  email!: string;
  password!: string;
  confirmPassword!: string;
  country!: string;
  age!: number;
  gender!: string;
  phone!: string;


  constructor(email: string, password: string, confirmPassword: string, country: string, age: number, gender: string, phone: string) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.country = country;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
  }
}
