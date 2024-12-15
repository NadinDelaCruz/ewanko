import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from '../tags/tags.component';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, FormsModule , TagsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Foods[] = [];

  constructor(private fs: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food =>
          food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
        );
        else if(params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag'])
        else {
        this.foods = this.fs.getAll();
      }
    });
  }
}
