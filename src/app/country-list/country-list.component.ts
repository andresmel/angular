import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CountryService } from './country.service'; 
import { ServiceCountryService } from '../service-country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
 
  public name:string;
  public url:string;
  countriesArray:any;
  constructor( private route: ActivatedRoute, private routes:Router,private serviceC:CountryService,private service:ServiceCountryService) { 
    this.name="";
    this.url="";
    this.countriesArray="";
  }

  ngOnInit(): void {

     var name=this.route.snapshot.params["name"];
     this.getCountryInfo(name);
    
  }

  getCountryInfo(name:string){
    this.serviceC.infoCountry(name).subscribe((data: any) => {
      this.countriesArray = data;
      this.url=this.countriesArray[0].flags.png;
      console.log(this.countriesArray[0]);
  });
}

back(){

 location.href="dashboard";
}

}
