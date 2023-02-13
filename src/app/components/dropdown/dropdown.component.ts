import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {DropdownFilterOptions} from 'primeng/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  selectedCity1: any;
  selectedCity2: any;
  selectedCity3: any;
  cities = [
    {name: {name: 'New York'}, code: 'NY', disable: true},
    {name: {name: 'Rome'}, code: 'RM'},
    {name: {name: 'London'}, code: 'LDN'},
    {name: {name: 'Istanbul'}, code: 'IST'},
    {name: {name: 'Paris'}, code: 'PRS'}
    ];

    formControl: FormControl = new FormControl(this.cities[2]);

  groupedCities = [
    {
        label: 'Germany', value: 'de',
        items: [
            {label: 'Berlin', value: 'Berlin'},
            {label: 'Frankfurt', value: 'Frankfurt'},
            {label: 'Hamburg', value: 'Hamburg'},
            {label: 'Munich', value: 'Munich'}
        ]
    },
    {
        label: 'USA', value: 'us',
        items: [
            {label: 'Chicago', value: 'Chicago'},
            {label: 'Los Angeles', value: 'Los Angeles'},
            {label: 'New York', value: 'New York'},
            {label: 'San Francisco', value: 'San Francisco'}
        ]
    },
    {
        label: 'Japan', value: 'jp',
        items: [
            {label: 'Kyoto', value: 'Kyoto'},
            {label: 'Osaka', value: 'Osaka'},
            {label: 'Tokyo', value: 'Tokyo'},
            {label: 'Yokohama', value: 'Yokohama'}
        ]
    }
  ];

  constructor() {
  }
  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((v)=>{
      console.log(v);
      
    })
  }

  getName(obj: any){
    return `1. item ${obj.name.name}`
  }

}
