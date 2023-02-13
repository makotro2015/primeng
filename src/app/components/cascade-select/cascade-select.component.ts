import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-cascade-select',
  templateUrl: './cascade-select.component.html',
  styleUrls: ['./cascade-select.component.scss']
})
export class CascadeSelectComponent implements OnInit {

  countries: any;
  selectedCity1 = new FormControl();

  constructor(private countryService: CountryService){
  }

  ngOnInit(): void {
    this.countryService.getCountries$().subscribe((countries) => {
      this.countries = countries;
    })
  }

}
