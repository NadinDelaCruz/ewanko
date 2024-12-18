import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    } else {
      this.cart = new Cart();
    }
  }

  private cart: Cart = new Cart();

  addToCart(food: Foods): void {
    const existingCartItem = this.cart.items.find(item => item.food.id === food.id);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      this.cart.items.push(new CartItem({ ...food }));
    }

    console.log('Cart after adding new item:', this.cart); // Debug cart structure
    this.saveCart();
  }

  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));

    console.log('Cart saved to localStorage:', this.cart);
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.saveCart();
  }

  changeQuantity(quantity: number, foodId: number): void {
    const cartItem = this.cart.items.find(item => item.food.id === foodId);

    if (!cartItem) {
      console.error(`Cart item not found for foodId: ${foodId}`);
      return;
    };

    cartItem.quantity = quantity;
    this.saveCart();
  }

  getCart(): Cart {
    console.log('Retrieving cart:', this.cart);
    return this.cart;
  }

  clearCart(): void {
    this.cart.items = [];
    this.saveCart();
  }
}
