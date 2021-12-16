import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ServiceDashboardService } from './service-dashboard.service';
import { Data} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiceCountryService } from '../service-country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public countriesArray: any;
  private name: string;


  constructor(private serviceDash: ServiceDashboardService,private route:Router,private service:ServiceCountryService ) {
    this.countriesArray = Array;
    this.name = "";
   

  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.serviceDash.getCountries().subscribe((data: any) => {
      this.countriesArray = data;
    });

  }

  getCountry(country: object) {
    console.log(country);

  }

  searchCountry(event: any) {
    this.name = event.target.value;
    this.serviceDash.getcountry(this.name).subscribe((data: any) => {
      this.countriesArray = data;
    });

  }

  send(ctry:any){
   var name=ctry.name.common;
   this.route.navigate(["/country",name]);
  }

  changeRegion(event: any) {

    this.name = event.target.value;
    if (this.name == "all") {
      this.getCountries();
    } else {
      this.serviceDash.getRegion(this.name).subscribe((data: any) => {
        this.countriesArray = data;

      });
    }
  }



}
