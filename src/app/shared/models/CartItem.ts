import { Foods } from './food';

export class CartItem {
  constructor(food: Foods) {
    this.food = food;
  }

  food!: Foods;
  quantity: number = 1;

  get price(): number {
    if (!this.food || !this.food.price) {
      return 0;
    }

    return this.food?.price ? this.food.price * this.quantity : 0;
  }
}
