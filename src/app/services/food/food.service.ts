import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[]{
      return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      { name: 'All', count: 60},
      { name: 'New', count: 20},
      { name: 'FullyLoaded', count: 4},
      { name: 'Favorites', count: 4},
      { name: 'Pasta', count: 8},
      { name: 'Bucket', count: 8},
      { name: 'Sandwich', count: 4},
      { name: 'Snacks', count: 4},
      { name: 'Drinks', count: 8},
    ]
  }

  getAll(): Foods[]{
    return [
      {
        id:1,
        name: '8-Pc Bucket Meal',
        price: 805.00,
        imageUrl: '/assets/new1.png',
        tags: ['New']
      },

      {
        id:2,
        name: 'Twister Combo',
        price: 170.00,
        imageUrl: '/assets/new2.png',
        tags: ['New']
      },

      {
        id:3,
        name: 'Famous Bowl Meal',
        price: 95.00,
        imageUrl: '/assets/new3.png',
        tags: ['New']
      },

      {
        id:4,
        name: 'Bucket of 10',
        price: 810.00,
        imageUrl: '/assets/new4.png',
        tags: ['New']
      },

      {
        id:5,
        name: 'Zinger Combo',
        price: 200.00,
        imageUrl: '/assets/new5.png',
        tags: ['New']
      },

      {
      id:6,
      name: '2-PC Fully Loaded Meal',
      price: 275.00,
      imageUrl: '/assets/new6.png',
      tags: ['New']
      },

      {
        id:7,
        name: 'Ala King Zinger Steak Meal with Buttered Corn',
        price: 180.00,
        imageUrl: '/assets/new7.png',
        tags: ['New']
      },

      {
        id:8,
        name: 'Creamy Iced Coffee',
        price: 65.00,
        imageUrl: '/assets/new8.png',
        tags: ['New']
      },

      {
        id:9,
        name: 'Large Shots Combo',
        price: 190.00,
        imageUrl: '/assets/new9.png',
        tags: ['New']
      },

      {
        id:10,
        name: 'Zinger Steak Fully Loaded Meal',
        price: 265.00,
        imageUrl: '/assets/new10.png',
        tags: ['New']
      },

      {
        id:11,
        name: 'Zinger Sandwich Fully Loaded Meal',
        price: 280.00,
        imageUrl: '/assets/new11.png',
        tags: ['New']
      },

      {
        id:12,
        name: 'Smoky BBQ Zinger Ala Carte',
        price: 165.00,
        imageUrl: '/assets/new12.png',
        tags: ['New']
      },

      {
        id:13,
        name: 'Smoky BBQ Zinger Combo',
        price: 210.00,
        imageUrl: '/assets/new13.png',
        tags: ['New']
      },

      {
        id:14,
        name: 'Coffee Float',
        price: 75.00,
        imageUrl: '/assets/new14.png',
        tags: ['New']
      },

      {
        id:15,
        name: 'Zinger Stacker',
        price: 240.00,
        imageUrl: '/assets/new15.png',
        tags: ['New']
      },

      {
        id:16,
        name: 'Zinger Stacker Combo',
        price: 300.00,
        imageUrl: '/assets/new16.png',
        tags: ['New']
      },

      {
        id:17,
        name: 'Holiday Brownie Box',
        price: 205.00,
        imageUrl: '/assets/new17.png',
        tags: ['New']
      },

      {
        id:18,
        name: 'Bucket of 8pc. Chicken + Side',
        price: 970.00,
        imageUrl: '/assets/new18.png',
        tags: ['New']
      },

      {
        id:19,
        name: 'Bucket of Chicken & Steak + Side',
        price: 970.00,
        imageUrl: '/assets/new19.png',
        tags: ['New']
      },

      {
        id:20,
        name: 'Bucket of Shots + Side',
        price: 970.00,
        imageUrl: '/assets/new20.png',
        tags: ['New']
      },

      {
        id:21,
        name: '1-PC Fully Loaded Meal',
        price: 195.00,
        imageUrl: '/assets/fullyloaded1.png',
        tags: ['FullyLoaded']
      },

      {
        id:22,
        name: 'Shots Fully Loaded Meal',
        price: 260.00,
        imageUrl: '/assets/fullyloaded2.png',
        tags: ['FullyLoaded']
      },

      {
        id:23,
        name: '2-PC Fully Loaded Meal',
        price: 275.00,
        imageUrl: '/assets/fullyloaded3.png',
        tags: ['FullyLoaded']
      },

      {
        id:24,
        name: 'Famous Bowl Fully Loaded Meal',
        price: 240.00,
        imageUrl: '/assets/fullyloaded4.png',
        tags: ['FullyLoaded']
      },

      {
        id:25,
        name: '2-PC Chicken Meal',
        price: 235.00,
        imageUrl: '/assets/favorites1.png',
        tags: ['Favorites']
      },

      {
        id:26,
        name: '1-PC Chicken Meal With Soup',
        price: 175.00,
        imageUrl: '/assets/favorites2.png',
        tags: ['Favorites']
      },

      {
        id:27,
        name: '1-PC Chicken Meal With Mashed Potato',
        price: 175.00,
        imageUrl: '/assets/favorites3.png',
        tags: ['Favorites']
      },

      {
        id:28,
        name: '1-PC Chicken Meal With Brownie',
        price: 175.00,
        imageUrl: '/assets/favorites4.png',
        tags: ['Favorites']
      },

      {
        id:29,
        name: '1-PC Chicken Spaghetti Meal',
        price: 195.00,
        imageUrl: '/assets/pasta1.png',
        tags: ['Pasta']
      },

      {
        id:30,
        name: 'Spaghetti',
        price: 65.00,
        imageUrl: '/assets/pasta2.png',
        tags: ['Pasta']
      },

      {
        id:31,
        name: 'Ala King Rice Bowl Meal',
        price: 180.00,
        imageUrl: '/assets/pasta3.png',
        tags: ['Pasta']
      },

      {
        id:32,
        name: 'Ala King Rice Bowl',
        price: 140.00,
        imageUrl: '/assets/pasta4.png',
        tags: ['Pasta']
      },

      {
        id:33,
        name: 'Sisig Rice Bowl',
        price: 140.00,
        imageUrl: '/assets/pasta5.png',
        tags: ['Pasta']
      },

      {
        id:34,
        name: 'Sisig Rice Bowl Meal',
        price: 180.00,
        imageUrl: '/assets/pasta6.png',
        tags: ['Pasta']
      },

      {
        id:35,
        name: 'Ala King Zinger Steak Ala Carte',
        price: 130.00,
        imageUrl: '/assets/pasta7.png',
        tags: ['Pasta']
      },

      {
        id:36,
        name: 'Ala King Zinger Steak Meal',
        price: 165.00,
        imageUrl: '/assets/pasta8.png',
        tags: ['Pasta']
      },

      {
        id:37,
        name: '6-PC Bucket Meal',
        price: 635.00,
        imageUrl: '/assets/bucket1.png',
        tags: ['Bucket']
      },

      {
        id:38,
        name: '8-Pc Bucket Meal',
        price: 805.00,
        imageUrl: '/assets/bucket2.png',
        tags: ['Bucket']
      },

      {
        id:39,
        name: 'Bucket of 10',
        price: 810.00,
        imageUrl: '/assets/bucket3.png',
        tags: ['Bucket']
      },

      {
        id:40,
        name: 'Bucket of 6',
        price: 540.00,
        imageUrl: '/assets/bucket4.png',
        tags: ['Bucket']
      },

      {
        id:41,
        name: 'Bucket of 8',
        price: 660.00,
        imageUrl: '/assets/bucket5.png',
        tags: ['Bucket']
      },

      {
        id:42,
        name: 'Bucket of 15',
        price: 1205.00,
        imageUrl: '/assets/bucket6.png',
        tags: ['Bucket']
      },

      {
        id:43,
        name: 'Bucket of 20',
        price: 1610.00,
        imageUrl: '/assets/bucket7.png',
        tags: ['Bucket']
      },

      {
        id:44,
        name: 'Bucket of 6 with Spaghetti Platter',
        price: 680.00,
        imageUrl: '/assets/bucket8.png',
        tags: ['Bucket']
      },

      {
        id:45,
        name: 'California Maki Twister',
        price: 120.00,
        imageUrl: '/assets/sandwich1.png',
        tags: ['Sandwich']
      },

      {
        id:46,
        name: 'Zinger',
        price: 155.00,
        imageUrl: '/assets/sandwich2.png',
        tags: ['Sandwich']
      },

      {
        id:47,
        name: 'Twister Combo',
        price: 170.00,
        imageUrl: '/assets/sandwich3.png',
        tags: ['Sandwich']
      },

      {
        id:48,
        name: 'Original Recipe Snacker',
        price: 95.00,
        imageUrl: '/assets/sandwich4.png',
        tags: ['Sandwich']
      },

      {
        id:49,
        name: 'Shots Combo',
        price: 130.00,
        imageUrl: '/assets/snacks1.png',
        tags: ['Snacks']
      },

      {
        id:50,
        name: 'Regular Shots',
        price: 80.00,
        imageUrl: '/assets/snacks2.png',
        tags: ['Snacks']
      },

      {
        id:51,
        name: 'Large Shots',
        price: 130.00,
        imageUrl: '/assets/snacks3.png',
        tags: ['Snacks']
      },

      {
        id:52,
        name: 'Famous Bowl',
        price: 75.00,
        imageUrl: '/assets/snacks4.png',
        tags: ['Snacks']
      },

      {
        id:53,
        name: 'REGULAR COKE',
        price: 55.00,
        imageUrl: '/assets/drinks1.png',
        tags: ['Drinks']
      },

      {
        id:54,
        name: 'REGULAR SPRITE',
        price: 55.00,
        imageUrl: '/assets/drinks2.png',
        tags: ['Drinks']
      },

      {
        id:55,
        name: 'REGULAR ROYAL',
        price: 55.00,
        imageUrl: '/assets/drinks3.png',
        tags: ['Drinks']
      },

      {
        id:56,
        name: 'BOTTLED WATER',
        price: 39.00,
        imageUrl: '/assets/drinks4.png',
        tags: ['Drinks']
      },

      {
        id:57,
        name: 'CARAMEL SUNDAE',
        price: 50.00,
        imageUrl: '/assets/drinks5.png',
        tags: ['Drinks']
      },

      {
        id:58,
        name: 'COKE FLOAT',
        price: 55.00,
        imageUrl: '/assets/drinks6.png',
        tags: ['Drinks']
      },

      {
        id:59,
        name: 'SPRITE FLOAT',
        price: 55.00,
        imageUrl: '/assets/drinks7.png',
        tags: ['Drinks']
      },

      {
        id:60,
        name: 'ROYAL FLOAT',
        price: 55.00,
        imageUrl: '/assets/drinks8.png',
        tags: ['Drinks']
      },

    ];
  }
}

