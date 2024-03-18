import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietCreatorComponent } from './diet-creator/diet-creator.component';
import { FoodItemDetailComponent } from './food-item-detail/food-item-detail.component';

const routes: Routes = [
  { path: 'diet-creator', component: DietCreatorComponent },
  { path: 'food-item-detail/:name', component: FoodItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
