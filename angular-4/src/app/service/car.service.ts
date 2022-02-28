import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${this.apiUrl}/${car.id}`,
      car
    );
  }
}
