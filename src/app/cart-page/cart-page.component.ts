import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [NgFor, CommonModule, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  cart!: Cart;
  constructor(private cartService: CartService) {
      this.setCart();
   }

  ngOnInit(): void {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
    if (!this.cart || !this.cart.items) {
      this.cart = new Cart();
    }

    console.log('Cart after setCart:', this.cart);
    console.log('Total Price after setCart:', this.cart.totalPrice);
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();

    console.log('Total price:', this.cart.totalPrice);
  }

  changeQuantity(foodId: number, quantityInString: string): void {
    const quantity = parseInt(quantityInString, 10);
    this.cartService.changeQuantity(quantity, foodId);
    this.setCart();

    console.log('Total price:', this.cart.totalPrice);
  }

  onQuantityChange(event: Event, foodId: number): void {
    const target = event.target as HTMLSelectElement;
    const quantity = parseInt(target.value, 10);

    if (isNaN(quantity)) {
      console.error('Invalid quantity:', target.value);
      return;
    }

    this.cartService.changeQuantity(quantity, foodId);
    this.setCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.setCart();

    console.log('Total price:', this.cart.totalPrice);
  }

  checkout() {
    alert('Proceeding to checkout. Thank you for your order!');
  }
}
