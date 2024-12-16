import { CartItem } from "./CartItem";

export class Cart{
  items:CartItem[] = [];

  get totalPrice():number{
    console.log('Calculating total price for cart items:', this.items);

    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
}
