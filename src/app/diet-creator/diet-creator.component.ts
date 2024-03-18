// src/app/diet-creator/diet-creator.component.ts
import { Component, OnInit } from '@angular/core';
import { FOOD_ITEMS } from '../mock-food';
import { NutritionService } from '../nutrition.service';
import { FoodItem } from '../foodItem';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-diet-creator',
  templateUrl: './diet-creator.component.html',
  styleUrls: ['./diet-creator.component.css']
})
export class DietCreatorComponent implements OnInit {
  foodItems: FoodItem[] = FOOD_ITEMS;
  selectedItems: any[] = [];
  data: any;
  show:boolean=false
 

  constructor(private nutritionService: NutritionService, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    console.log(this.sharedDataService.setSelectedItems(this.selectedItems));
  }

  addToDiet(item: FoodItem) {
    this.nutritionService.getCalories(item.name).subscribe(response => {
      console.log('res',response);
      
      if (response && response.length > 0) {
        const calorieData = response[0];
        this.selectedItems.push(calorieData);
        this.nutritionService.setNutritionDataOnIncrease(this.selectedItems)
        this.show=true
      }
    });

  }
 

  getTotalCalories(): number {
    return parseFloat(this.selectedItems.reduce((total, item) => total + item.calories, 0).toFixed(1));
  }

  removeFromDiet(index: number) {
    this.selectedItems.splice(index, 1);
    if (this.selectedItems.length==0) {
      this.show=false
    } 
    this.sharedDataService.setSelectedItems(this.selectedItems);
    this.nutritionService.setNutritionDataOnDecrease(this.selectedItems)

  }

  currentPage = 1;
  itemsPerPage = 5;

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.foodItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

}
