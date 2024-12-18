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
        description: 'A complete group meal with 8 pcs of your favorite Original Recipe or Hot and Crispy chicken, gravy, your choice of 4 fixins, 4 steamed rice and your choice of 4 drinks.',
        price: 805.00,
        imageUrl: '/assets/new1.png',
        tags: ['New']
      },

      {
        id:2,
        name: 'Twister Combo',
        description: 'Your choice between our California Maki or Pizza Twister, paired with your choice of fixins and drink.',
        price: 170.00,
        imageUrl: '/assets/new2.png',
        tags: ['New']
      },

      {
        id:3,
        name: 'Famous Bowl Meal',
        description: 'Famous bowl with drink',
        price: 95.00,
        imageUrl: '/assets/new3.png',
        tags: ['New']
      },

      {
        id:4,
        name: 'Bucket of 10',
        description: 'Buy a Bucket of 10 pcs of Original Recipe or Hot and Crispy chicken',
        price: 810.00,
        imageUrl: '/assets/new4.png',
        tags: ['New']
      },

      {
        id:5,
        name: 'Zinger Combo',
        description: 'Our signature big spicy sandwich made with crunchy Zinger chicken fillet topped with fresh lettuce and mayo in a soft Kaiser bun, served with your choice of fixins and drink.',
        price: 200.00,
        imageUrl: '/assets/new5.png',
        tags: ['New']
      },

      {
      id:6,
      name: '2-PC Fully Loaded Meal',
      description: '2 pieces of your favorite Original Recipe or Hot & Crispy chicken, paired with steamed rice,jr. mushroom soup, regular mashed potato, and your choice of drink.',
      price: 275.00,
      imageUrl: '/assets/new6.png',
      tags: ['New']
      },

      {
        id:7,
        name: 'Ala King Zinger Steak Meal with Buttered Corn',
        description: 'Zinger fillet drenched in Ala King sauce, with Chicken Butter Rice, Buttered Corn and Regular drink',
        price: 180.00,
        imageUrl: '/assets/new7.png',
        tags: ['New']
      },

      {
        id:8,
        name: 'Creamy Iced Coffee',
        description: 'KFCs signature blend of creamy iced coffee with 100% Arabica beans',
        price: 65.00,
        imageUrl: '/assets/new8.png',
        tags: ['New']
      },

      {
        id:9,
        name: 'Large Shots Combo',
        description: 'Our crunchy Shots -- Fun Shots or Hot Shots-- matched with our well loved crispy fries or your choice of fixin and a drink.',
        price: 190.00,
        imageUrl: '/assets/new9.png',
        tags: ['New']
      },

      {
        id:10,
        name: 'Zinger Steak Fully Loaded Meal',
        description: 'Load up with this new epic hunger buster meal. It includes 1 piece of our signature Original Recipe chicken, Zinger Steak with Ala King sauce, Mushroom Soup, Mashed Potato, served with steamed rice and your choice of drink.',
        price: 265.00,
        imageUrl: '/assets/new10.png',
        tags: ['New']
      },

      {
        id:11,
        name: 'Zinger Sandwich Fully Loaded Meal',
        description: 'Load up with this new epic hunger buster meal. It includes 1 piece of our signature Original Recipe chicken, Zinger Sandwich, Mushroom Soup, Mashed Potato, served with steamed rice and your choice of drink.',
        price: 280.00,
        imageUrl: '/assets/new11.png',
        tags: ['New']
      },

      {
        id:12,
        name: 'Smoky BBQ Zinger Ala Carte',
        description: 'CRISPY. SAUCY. JUICY. It is KFC signature Zinger topped with an addicting, sweet and smoky barbecue sauce.',
        price: 165.00,
        imageUrl: '/assets/new12.png',
        tags: ['New']
      },

      {
        id:13,
        name: 'Smoky BBQ Zinger Combo',
        description: 'CRISPY. SAUCY. JUICY. It is KFC signature Zinger topped with an addicting, sweet and smoky barbecue sauce paired with regular fries and a regular drink.',
        price: 210.00,
        imageUrl: '/assets/new13.png',
        tags: ['New']
      },

      {
        id:14,
        name: 'Coffee Float',
        description: 'Experience the delightful combination of creamy iced coffee and KFC French vanilla soft serve',
        price: 75.00,
        imageUrl: '/assets/new14.png',
        tags: ['New']
      },

      {
        id:15,
        name: 'Zinger Stacker',
        description: 'The New KFC Zinger Stacker. Enjoy the Zinger with 2 big fillet, cheese and mayo.',
        price: 240.00,
        imageUrl: '/assets/new15.png',
        tags: ['New']
      },

      {
        id:16,
        name: 'Zinger Stacker Combo',
        description: 'The New KFC Zinger Stacker. Enjoy the Zinger with 2 big fillet, cheese and mayo with fixin and drink.',
        price: 300.00,
        imageUrl: '/assets/new16.png',
        tags: ['New']
      },

      {
        id:17,
        name: 'Holiday Brownie Box',
        description: 'It is KFC Brownie Box Holiday Edition featuring 2 new flavors! Enjoy 2 pcs of the Original Chocolate brownie, 2 Almond Chocolate brownies, and 2 White Chocolate brownies!',
        price: 205.00,
        imageUrl: '/assets/new17.png',
        tags: ['New']
      },

      {
        id:18,
        name: 'Bucket of 8pc. Chicken + Side',
        description: 'Feast with Bucket & Match! Step 1: Choose a KFC Bucket! Step 2: Match it with a side! Step 3: Enjoy with rice & drinks!',
        price: 970.00,
        imageUrl: '/assets/new18.png',
        tags: ['New']
      },

      {
        id:19,
        name: 'Bucket of Chicken & Steak + Side',
        description: 'Feast with Bucket & Match! Step 1: Choose a KFC Bucket! Step 2: Match it with a side! Step 3: Enjoy with rice & drinks!',
        price: 970.00,
        imageUrl: '/assets/new19.png',
        tags: ['New']
      },

      {
        id:20,
        name: 'Bucket of Shots + Side',
        description: 'Feast with Bucket & Match! Step 1: Choose a KFC Bucket! Step 2: Match it with a side! Step 3: Enjoy with rice & drinks!',
        price: 970.00,
        imageUrl: '/assets/new20.png',
        tags: ['New']
      },

      {
        id:21,
        name: '1-PC Fully Loaded Meal',
        description: '1 piece of your favorite Original Recipe or Hot & Crispy chicken, paired with steamed rice, jr. mushroom soup, mashed potato and your choice of drink.',
        price: 195.00,
        imageUrl: '/assets/fullyloaded1.png',
        tags: ['FullyLoaded']
      },

      {
        id:22,
        name: 'Shots Fully Loaded Meal',
        description: '1 piece of your favorite Original Recipe or Hot & Crispy chicken with 1 regular serving of shots, paired with steamed rice, jr. mushroom soup, regular mashed potato, and your choice of drink.',
        price: 260.00,
        imageUrl: '/assets/fullyloaded2.png',
        tags: ['FullyLoaded']
      },

      {
        id:23,
        name: '2-PC Fully Loaded Meal',
        description: '2 pieces of your favorite Original Recipe or Hot & Crispy chicken, paired with steamed rice,jr. mushroom soup, regular mashed potato, and your choice of drink.',
        price: 275.00,
        imageUrl: '/assets/fullyloaded3.png',
        tags: ['FullyLoaded']
      },

      {
        id:24,
        name: 'Famous Bowl Fully Loaded Meal',
        description: 'Load up with a complete meal in a box: 1 pc. chicken, Mushroom Soup, Famous Bowl, Rice and Drink',
        price: 240.00,
        imageUrl: '/assets/fullyloaded4.png',
        tags: ['FullyLoaded']
      },

      {
        id:25,
        name: '2-PC Chicken Meal',
        description: '2 pieces of your favorite Original Recipe or Hot and Crispy chicken paired with steamed rice and your choice of drink.',
        price: 235.00,
        imageUrl: '/assets/favorites1.png',
        tags: ['Favorites']
      },

      {
        id:26,
        name: '1-PC Chicken Meal With Soup',
        description: '1 piece of your favorite Original Recipe or Hot and Crispy Chicken meal paired with steamed rice, mushroom soup, and your choice of drink.',
        price: 175.00,
        imageUrl: '/assets/favorites2.png',
        tags: ['Favorites']
      },

      {
        id:27,
        name: '1-PC Chicken Meal With Mashed Potato',
        description: '1 piece of your favorite Original Recipe or Hot and Crispy Chicken meal paired with steamed rice, mashed potato, and your choice of drink.',
        price: 175.00,
        imageUrl: '/assets/favorites3.png',
        tags: ['Favorites']
      },

      {
        id:28,
        name: '1-PC Chicken Meal With Brownie',
        description: '1 piece of your favorite Original Recipe or Hot and Crispy Chicken meal paired with steamed rice, brownie, and your choice of drink.',
        price: 175.00,
        imageUrl: '/assets/favorites4.png',
        tags: ['Favorites']
      },

      {
        id:29,
        name: '1-PC Chicken Spaghetti Meal',
        description: '1 piece of your favorite Original Recipe or Hot and Crispy Chicken meal paired with spaghetti and your choice of drink.',
        price: 195.00,
        imageUrl: '/assets/pasta1.png',
        tags: ['Pasta']
      },

      {
        id:30,
        name: 'Spaghetti',
        description: 'Your favorite pinoy-style spaghetti topped with sweet meaty spaghetti sauce and sprinkled with grated cheese.',
        price: 65.00,
        imageUrl: '/assets/pasta2.png',
        tags: ['Pasta']
      },

      {
        id:31,
        name: 'Ala King Rice Bowl Meal',
        description: 'Our delicious Ala King Rice Bowl, served with your choice of drink.',
        price: 180.00,
        imageUrl: '/assets/pasta3.png',
        tags: ['Pasta']
      },

      {
        id:32,
        name: 'Ala King Rice Bowl',
        description: 'A bowl with 2 Original Recipe fillets drenched with creamy Ala-King sauce with steamed rice and corn on the side.',
        price: 140.00,
        imageUrl: '/assets/pasta4.png',
        tags: ['Pasta']
      },

      {
        id:33,
        name: 'Sisig Rice Bowl',
        description: 'hello',
        price: 140.00,
        imageUrl: '/assets/pasta5.png',
        tags: ['Pasta']
      },

      {
        id:34,
        name: 'Sisig Rice Bowl Meal',
        description: 'KFC Hot Shots drizzled with chicken sisig sauce, fried chicken skin, topped with mayo and a side of egg paired with steamed rice',
        price: 180.00,
        imageUrl: '/assets/pasta6.png',
        tags: ['Pasta']
      },

      {
        id:35,
        name: 'Ala King Zinger Steak Ala Carte',
        description: 'hello',
        price: 130.00,
        imageUrl: '/assets/pasta7.png',
        tags: ['Pasta']
      },

      {
        id:36,
        name: 'Ala King Zinger Steak Meal',
        description: 'KFC Hot Shots drizzled with chicken sisig sauce, fried chicken skin, topped with mayo and a side of egg paired with steamed rice and your choice of drink.',
        price: 165.00,
        imageUrl: '/assets/pasta8.png',
        tags: ['Pasta']
      },

      {
        id:37,
        name: '6-PC Bucket Meal',
        description: 'A smart choice for a group of 3 with 6 pieces of your favorite KFC chicken, gravy, your choice of 3 fixins, and your choice of 3 drinks.',
        price: 635.00,
        imageUrl: '/assets/bucket1.png',
        tags: ['Bucket']
      },

      {
        id:38,
        name: '8-Pc Bucket Meal',
        description: 'A complete group meal with 8 pcs of your favorite Original Recipe or Hot and Crispy chicken, gravy, your choice of 4 fixins, 4 steamed rice and your choice of 4 drinks.',
        price: 805.00,
        imageUrl: '/assets/bucket2.png',
        tags: ['Bucket']
      },

      {
        id:39,
        name: 'Bucket of 10',
        description: 'Buy a Bucket of 10 pcs of Original Recipe or Hot and Crispy chicken',
        price: 810.00,
        imageUrl: '/assets/bucket3.png',
        tags: ['Bucket']
      },
      
      {
        id:40,
        name: 'Bucket of 6',
        description: 'Get 6 pieces our signature KFC Chicken! Choose from Original Recipe or Hot and Crispy',
        price: 540.00,
        imageUrl: '/assets/bucket4.png',
        tags: ['Bucket']
      },

      {
        id:41,
        name: 'Bucket of 8',
        description: '8 pieces of our signature KFC chicken paired with gravy ',
        price: 660.00,
        imageUrl: '/assets/bucket5.png',
        tags: ['Bucket']
      },

      {
        id:42,
        name: 'Bucket of 15',
        description: '15 pieces of our signature KFC chicken paired with gravy',
        price: 1205.00,
        imageUrl: '/assets/bucket6.png',
        tags: ['Bucket']
      },

      {
        id:43,
        name: 'Bucket of 20',
        description: '20 pieces of our signature KFC chicken paired with gravy',
        price: 1610.00,
        imageUrl: '/assets/bucket7.png',
        tags: ['Bucket']
      },

      {
        id:44,
        name: 'Bucket of 6 with Spaghetti Platter',
        description: '6pcs of KFC signature chicken with 1 Spaghetti Super Platter',
        price: 680.00,
        imageUrl: '/assets/bucket8.png',
        tags: ['Bucket']
      },

      {
        id:45,
        name: 'California Maki Twister',
        description: 'Asian inspired Twister with crunchy chicken strips wrapped in a toasted tortilla sandwich with mango bits and cucumber served with Japanese Mayo dressing.',
        price: 120.00,
        imageUrl: '/assets/sandwich1.png',
        tags: ['Sandwich']
      },

      {
        id:46,
        name: 'Zinger',
        description: 'Our signature big spicy sandwich made with crunchy Zinger chicken fillet topped with fresh lettuce and mayo in a soft Kaiser bun.',
        price: 155.00,
        imageUrl: '/assets/sandwich2.png',
        tags: ['Sandwich']
      },

      {
        id:47,
        name: 'Twister Combo',
        description: 'Your choice between our California Maki or Pizza Twister, paired with your choice of fixins and drink.',
        price: 170.00,
        imageUrl: '/assets/sandwich3.png',
        tags: ['Sandwich']
      },

      {
        id:48,
        name: 'Original Recipe Snacker',
        description: 'A delicious whole meat chicken fillet sandwich with lettuce and pepper mayo in a 3.5 inch sesame seeded bun.',
        price: 95.00,
        imageUrl: '/assets/sandwich4.png',
        tags: ['Sandwich']
      },

      {
        id:49,
        name: 'Shots Combo',
        description: 'hello',
        price: 130.00,
        imageUrl: '/assets/snacks1.png',
        tags: ['Snacks']
      },

      {
        id:50,
        name: 'Regular Shots',
        description: 'Bite-sized pieces of spicy boneless chicken thats crispy on the outside, tender on the inside, with your choice of fixins and drink.',
        price: 80.00,
        imageUrl: '/assets/snacks2.png',
        tags: ['Snacks']
      },

      {
        id:51,
        name: 'Large Shots',
        description: 'Fun bite-sized pieces of boneless chicken you can pop.',
        price: 130.00,
        imageUrl: '/assets/snacks3.png',
        tags: ['Snacks']
      },

      {
        id:52,
        name: 'Famous Bowl',
        description: 'KFC snack favorite, Famous bowl, filled with all your KFC favorites',
        price: 75.00,
        imageUrl: '/assets/snacks4.png',
        tags: ['Snacks']
      },

      {
        id:53,
        name: 'REGULAR COKE',
        description: 'Coke Regular',
        price: 55.00,
        imageUrl: '/assets/drinks1.png',
        tags: ['Drinks']
      },

      {
        id:54,
        name: 'REGULAR SPRITE',
        description: 'Coke Sprite',
        price: 55.00,
        imageUrl: '/assets/drinks2.png',
        tags: ['Drinks']
      },

      {
        id:55,
        name: 'REGULAR ROYAL',
        description: 'Coke Royal',
        price: 55.00,
        imageUrl: '/assets/drinks3.png',
        tags: ['Drinks']
      },

      {
        id:56,
        name: 'BOTTLED WATER',
        description: 'Bottled Water',
        price: 39.00,
        imageUrl: '/assets/drinks4.png',
        tags: ['Drinks']
      },

      {
        id:57,
        name: 'CARAMEL SUNDAE',
        description: 'Creamy vanilla ice cream drizzled with sweet caramel syrup',
        price: 50.00,
        imageUrl: '/assets/drinks5.png',
        tags: ['Drinks']
      },

      {
        id:58,
        name: 'COKE FLOAT',
        description: 'Coke drink topped with creamy vanilla ice cream and rich chocolate syrup',
        price: 55.00,
        imageUrl: '/assets/drinks6.png',
        tags: ['Drinks']
      },

      {
        id:59,
        name: 'SPRITE FLOAT',
        description: 'Sprite drink topped with creamy vanilla ice cream',
        price: 55.00,
        imageUrl: '/assets/drinks7.png',
        tags: ['Drinks']
      },

      {
        id:60,
        name: 'ROYAL FLOAT',
        description: 'Royal drink topped with creamy vanilla ice cream',
        price: 55.00,
        imageUrl: '/assets/drinks8.png',
        tags: ['Drinks']
      },

    ];
  }
}

