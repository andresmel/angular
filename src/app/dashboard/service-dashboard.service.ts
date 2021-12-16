import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceDashboardService {
  private baseurl:string;
  private baseUrlSearch:string;
  private baseUrlRegion:string;
  constructor(private http:HttpClient) { 

  this.baseurl="https://restcountries.com/v3.1/all";
  this.baseUrlSearch="https://restcountries.com/v3.1/name/";
  this.baseUrlRegion="https://restcountries.com/v3.1/region/";
  }

  getCountries(){
    return this.http.get(this.baseurl);
  }

  getcountry(name:string){
    return this.http.get(this.baseUrlSearch+name);
  }

  getRegion(name:string){
    return this.http.get(this.baseUrlRegion+name);
  }
}
