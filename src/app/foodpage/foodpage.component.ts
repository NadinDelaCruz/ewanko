import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodpage',
  imports: [RouterLink],
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent implements OnInit {
  food!:Foods;

  constructor(private activatedRoute:ActivatedRoute,
    private foodService:FoodService, private cartService:CartService,
    private router:Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
          this.food = foodService.getFoodById(params['id'])
      })
     }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    setTimeout(() => this.router.navigateByUrl('/cart-page'), 0);
  }
}
