import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-item-detail',
  templateUrl: './food-item-detail.component.html',
  styleUrls: ['./food-item-detail.component.css']
})
export class FoodItemDetailComponent implements OnInit {
  foodItemDetails: any = null;
  private routeSub! : Subscription;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    // this.getFoodItemDetails(this.route.snapshot.paramMap.get('name')!);
    this.routeSub = this.route.params.subscribe(params => {
      // Fetch new item details based on the updated route parameter
      this.getFoodItemDetails(params['name']);
    });
  }

  getFoodItemDetails(name: string): void {
    const apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${name}`;
    const headers = new HttpHeaders({
      'X-Api-Key': 'PCpRLuMb5jgtPSB3y3X0Lw==bdP6gcG8MW9ssnhM'
    });

    this.http.get<any[]>(apiUrl, { headers }).subscribe(data => {
      if (data && data.length > 0) {
        this.foodItemDetails = data[0];
      }
    });
  }
}
