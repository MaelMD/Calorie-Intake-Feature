import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private selectedItems: any[] = [];

  setSelectedItems(items: any[]) {
    this.selectedItems = items;
  }

 /*  private totals = { sugar: 0, fat: 0, protein: 0 };
  setNutritionData() {
    const lastItem= this.selectedItems[this.selectedItems.length-1]
    this.totals.sugar += lastItem.sugar_g;
    this.totals.fat += lastItem.fat_total_g;
    this.totals.protein += lastItem.protein_g;
  }

  getNutData(){
    return this.totals
  }
 */
}
