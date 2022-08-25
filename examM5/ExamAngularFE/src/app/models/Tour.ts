export class Tour{
  id?: number;
  title?: string;
  price?: number;
  description?: string;


  constructor(title: string, price: number, description: string) {
    this.title = title;
    this.price = price;
    this.description = description;
  }
}
