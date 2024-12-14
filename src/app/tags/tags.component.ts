import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';  
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  imports: [CommonModule , FormsModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags:Tag[] =[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.tags = this.fs.getAllTag();
  }

}
