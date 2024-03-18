import { Component, OnInit, OnDestroy } from '@angular/core';
import { NutritionService } from '../nutrition.service';
import { EMPTY, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.css']
})
export class testChart implements OnInit, OnDestroy {
  data: any;
  options: any;
  private nutritionDataSubscription: Subscription = EMPTY.subscribe();;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {
    this.nutritionDataSubscription = this.nutritionService.getNutritionData().subscribe(nutritionData => {
      this.updateChartData(nutritionData);
    });
  }

  ngOnDestroy() {
    if (this.nutritionDataSubscription) {
      this.nutritionDataSubscription.unsubscribe();
    }
  }

  private updateChartData(nutritionData: any) {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ['Sugar', 'Fat', 'Protein'],
      datasets: [
        {
          data: [nutritionData.sugar, nutritionData.fat, nutritionData.protein],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
          }
        }
      }
    };
  }
}
