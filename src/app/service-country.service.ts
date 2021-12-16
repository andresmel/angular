import { Injectable,Output ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCountryService {
  @Output() dip:EventEmitter<any>=new EventEmitter();
  constructor() { }
  
}
