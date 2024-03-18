// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DietCreatorComponent } from './diet-creator/diet-creator.component';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodItemDetailComponent } from './food-item-detail/food-item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { testChart } from './test-chart/test-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DietCreatorComponent,
    FoodItemDetailComponent,
    testChart
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
