import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiUrl = 'https://api.api-ninjas.com/v1/nutrition?query=';
  private totalsSubject = new BehaviorSubject({ sugar: 0, fat: 0, protein: 0 });
  totals$ = this.totalsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCalories(foodName: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': 'PCpRLuMb5jgtPSB3y3X0Lw==bdP6gcG8MW9ssnhM'
    });

    return this.http.get<any[]>(`${this.apiUrl}${foodName}`, { headers });
  }

  setNutritionDataOnIncrease(selectedItems: any[]) {
    const lastItem = selectedItems[selectedItems.length - 1];
    const totals = {
      sugar: this.totalsSubject.value.sugar + lastItem.sugar_g,
      fat: this.totalsSubject.value.fat + lastItem.fat_total_g,
      protein: this.totalsSubject.value.protein + lastItem.protein_g,
    };
    this.totalsSubject.next(totals);
  }

  setNutritionDataOnDecrease(selectedItems: any[]) {
    const lastItem = selectedItems[selectedItems.length - 1];
    const totals = {
      sugar: this.totalsSubject.value.sugar - lastItem.sugar_g,
      fat: this.totalsSubject.value.fat - lastItem.fat_total_g,
      protein: this.totalsSubject.value.protein - lastItem.protein_g,
    };
    this.totalsSubject.next(totals);
  }

  getNutritionData() {
    return this.totals$;
  }
}
