import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl:string;

  constructor(private http:HttpClient) { 
    this.baseUrl="https://restcountries.com/v3.1/name/";
  }

  infoCountry(name:string){
    return this.http.get(this.baseUrl+name);
  }

}
