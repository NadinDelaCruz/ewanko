import { CartItem } from "./CartItem";

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    console.log('Calculating total price. Items:', this.items);

    if (!this.items || this.items.length === 0) {
      return 0;
    }

    return this.items.reduce((sum, item) => {
      console.log('Item price:', item.price, 'Quantity:', item.quantity);
      return sum + item.price;
    }, 0);
  }
}
