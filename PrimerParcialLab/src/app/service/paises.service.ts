import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paises: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((data: any) => {
      data.forEach(element => {
        this.paises.push(element);
      });
    });
  }

  public getAll() {
    return this.paises;
  }
}
