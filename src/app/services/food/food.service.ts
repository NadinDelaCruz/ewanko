import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { NgModule } from '@angular/core';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string) :Foods[]{
      return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      { name: 'All', count: 60},
      { name: 'new', count: 20},
      { name: 'fullyloaded', count: 4},
      { name: 'favorites', count: 4},
      { name: 'pasta', count: 8},
      { name: 'bucket', count: 8},
      { name: 'sandwich', count: 4},
      { name: 'snacks', count: 4},
      { name: 'drinks', count: 8},
    ]
  }

  getAll(): Foods[]{
    return [
      {
        id:1,
        name: '8-Pc Bucket Meal',
        imageUrl: '/assets/new1.png',
        tags: ['new']
      },

      {
        id:2,
        name: 'Twister Combo',
        imageUrl: '/assets/new2.png',
        tags: ['new']
      },

      {
        id:3,
        name: 'Famous Bowl Meal',
        imageUrl: '/assets/new3.png',
        tags: ['new']
      },

      {
        id:4,
        name: 'Bucket of 10',
        imageUrl: '/assets/new4.png',
        tags: ['new']
      },

      {
        id:5,
        name: 'Zinger Combo',
        imageUrl: '/assets/new5.png',
        tags: ['new']
      },

      {
      id:6,
      name: '2-PC Fully Loaded Meal',
      imageUrl: '/assets/new6.png',
      tags: ['new']
      },

      {
        id:7,
        name: '2-PC Fully Loaded Meal',
        imageUrl: '/assets/new7.png',
        tags: ['new']
      },

      {
        id:8,
        name: 'Ala King Zinger Steak Meal with Buttered Corn',
        imageUrl: '/assets/new8.png',
        tags: ['new']
      },

      {
        id:9,
        name: 'Large Shots Combo',
        imageUrl: '/assets/new9.png',
        tags: ['new']
      },

      {
        id:10,
        name: 'Zinger Steak Fully Loaded Meal',
        imageUrl: '/assets/new10.png',
        tags: ['new']
      },

      {
        id:11,
        name: 'Zinger Sandwich Fully Loaded Meal',
        imageUrl: '/assets/new11.png',
        tags: ['new']
      },

      {
        id:12,
        name: 'Smoky BBQ Zinger Ala Carte',
        imageUrl: '/assets/new12.png',
        tags: ['new']
      },

      {
        id:13,
        name: 'Smoky BBQ Zinger Combo',
        imageUrl: '/assets/new13.png',
        tags: ['new']
      },

      {
        id:14,
        name: 'Coffee Float',
        imageUrl: '/assets/new14.png',
        tags: ['new']
      },

      {
        id:15,
        name: 'Zinger Stacker',
        imageUrl: '/assets/new15.png',
        tags: ['new']
      },

      {
        id:16,
        name: 'Zinger Stacker Combo',
        imageUrl: '/assets/new16.png',
        tags: ['new']
      },

      {
        id:17,
        name: 'Holiday Brownie Box',
        imageUrl: '/assets/new17.png',
        tags: ['new']
      },

      {
        id:18,
        name: 'Bucket of 8pc. Chicken + Side',
        imageUrl: '/assets/new18.png',
        tags: ['new']
      },

      {
        id:19,
        name: 'Bucket of Chicken & Steak + Side',
        imageUrl: '/assets/new19.png',
        tags: ['new']
      },

      {
        id:20,
        name: 'Bucket of Shots + Side',
        imageUrl: '/assets/new20.png',
        tags: ['new']
      },

      {
        id:21,
        name: '1-PC Fully Loaded Meal',
        imageUrl: '/assets/fullyloaded1.png',
        tags: ['fullyloaded']
      },

      {
        id:22,
        name: 'Shots Fully Loaded Meal',
        imageUrl: '/assets/fullyloaded2.png',
        tags: ['fullyloaded']
      },

      {
        id:23,
        name: '2-PC Fully Loaded Meal',
        imageUrl: '/assets/fullyloaded3.png',
        tags: ['fullyloaded']
      },

      {
        id:24,
        name: 'Famous Bowl Fully Loaded Meal',
        imageUrl: '/assets/fullyloaded4.png',
        tags: ['fullyloaded']
      },

      {
        id:25,
        name: '2-PC Chicken Meal',
        imageUrl: '/assets/favorites1.png',
        tags: ['favorites']
      },

      {
        id:26,
        name: '1-PC Chicken Meal With Soup',
        imageUrl: '/assets/favorites2.png',
        tags: ['favorites']
      },

      {
        id:27,
        name: '1-PC Chicken Meal With Mashed Potato',
        imageUrl: '/assets/favorites3.png',
        tags: ['favorites']
      },

      {
        id:28,
        name: '1-PC Chicken Meal With Brownie',
        imageUrl: '/assets/favorites4.png',
        tags: ['favorites']
      },

      {
        id:29,
        name: '1-PC Chicken Spaghetti Meal',
        imageUrl: '/assets/pasta1.png',
        tags: ['pasta']
      },

      {
        id:30,
        name: 'Spaghetti',
        imageUrl: '/assets/pasta2.png',
        tags: ['pasta']
      },

      {
        id:31,
        name: 'Ala King Rice Bowl Meal',
        imageUrl: '/assets/pasta3.png',
        tags: ['pasta']
      },

      {
        id:32,
        name: 'Ala King Rice Bowl',
        imageUrl: '/assets/pasta4.png',
        tags: ['pasta']
      },

      {
        id:33,
        name: 'Sisig Rice Bowl',
        imageUrl: '/assets/pasta5.png',
        tags: ['pasta']
      },

      {
        id:34,
        name: 'Sisig Rice Bowl Meal',
        imageUrl: '/assets/pasta6.png',
        tags: ['pasta']
      },

      {
        id:35,
        name: 'Ala King Zinger Steak Ala Carte',
        imageUrl: '/assets/pasta7.png',
        tags: ['pasta']
      },

      {
        id:36,
        name: 'Ala King Zinger Steak Meal',
        imageUrl: '/assets/pasta8.png',
        tags: ['pasta']
      },

      {
        id:37,
        name: '6-PC Bucket Meal',
        imageUrl: '/assets/bucket1.png',
        tags: ['bucket']
      },

      {
        id:38,
        name: '8-Pc Bucket Meal',
        imageUrl: '/assets/bucket2.png',
        tags: ['bucket']
      },

      {
        id:39,
        name: 'Bucket of 10',
        imageUrl: '/assets/bucket3.png',
        tags: ['bucket']
      },

      {
        id:40,
        name: 'Bucket of 6',
        imageUrl: '/assets/bucket4.png',
        tags: ['bucket']
      },

      {
        id:41,
        name: 'Bucket of 8',
        imageUrl: '/assets/bucket5.png',
        tags: ['bucket']
      },

      {
        id:42,
        name: 'Bucket of 15',
        imageUrl: '/assets/bucket6.png',
        tags: ['bucket']
      },

      {
        id:43,
        name: 'Bucket of 20',
        imageUrl: '/assets/bucket7.png',
        tags: ['bucket']
      },

      {
        id:44,
        name: 'Bucket of 6 with Spaghetti Platter',
        imageUrl: '/assets/bucket8.png',
        tags: ['bucket']
      },

      {
        id:45,
        name: 'California Maki Twister',
        imageUrl: '/assets/sandwich1.png',
        tags: ['sandwich']
      },

      {
        id:46,
        name: 'Zinger',
        imageUrl: '/assets/sandwich2.png',
        tags: ['sandwich']
      },

      {
        id:47,
        name: 'Twister Combo',
        imageUrl: '/assets/sandwich3.png',
        tags: ['sandwich']
      },

      {
        id:48,
        name: 'Original Recipe Snacker',
        imageUrl: '/assets/sandwich4.png',
        tags: ['sandwich']
      },

      {
        id:49,
        name: 'Shots Combo',
        imageUrl: '/assets/snacks1.png',
        tags: ['snacks']
      },

      {
        id:50,
        name: 'Regular Shots',
        imageUrl: '/assets/snacks2.png',
        tags: ['snacks']
      },

      {
        id:51,
        name: 'Large Shots',
        imageUrl: '/assets/snacks3.png',
        tags: ['snacks']
      },

      {
        id:52,
        name: 'Famous Bowl',
        imageUrl: '/assets/snacks4.png',
        tags: ['snacks']
      },

      {
        id:53,
        name: 'REGULAR COKEZERO',
        imageUrl: '/assets/drinks1.png',
        tags: ['drinks']
      },

      {
        id:54,
        name: 'REGULAR SPRITE',
        imageUrl: '/assets/drinks2.png',
        tags: ['drinks']
      },

      {
        id:55,
        name: 'REGULAR ROYAL',
        imageUrl: '/assets/drinks3.png',
        tags: ['drinks']
      },

      {
        id:56,
        name: 'BOTTLED WATER',
        imageUrl: '/assets/drinks4.png',
        tags: ['drinks']
      },

      {
        id:57,
        name: 'CARAMEL SUNDAE',
        imageUrl: '/assets/drinks5.png',
        tags: ['drinks']
      },

      {
        id:58,
        name: 'COKE FLOAT',
        imageUrl: '/assets/drinks6.png',
        tags: ['drinks']
      },

      {
        id:59,
        name: 'SPRITE FLOAT',
        imageUrl: '/assets/drinks7.png',
        tags: ['drinks']
      },

      {
        id:60,
        name: 'ROYAL FLOAT',
        imageUrl: '/assets/drinks8.png',
        tags: ['drinks']
      },

    ];
  }
}

