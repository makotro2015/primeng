import { Component, OnInit } from '@angular/core';
import { Man, PeopleColumn } from 'src/app/interface/interface';
import { PeopleService } from 'src/app/services/people.service';
import { PEOPLE_COLS } from './constants/people-list.columns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export default class TableComponent implements OnInit {

  people: Man[] = [];
  selectedPeople: Man[] = [];
  cols: PeopleColumn[] = JSON.parse(JSON.stringify(PEOPLE_COLS));

  constructor(public peopleService: PeopleService){}

  ngOnInit(): void {
    this.peopleService.getPeople$().subscribe((people) => {
      this.people = people;
    })
  }

  onSetColumns(newCols: PeopleColumn[]){
    this.cols = newCols;
  }

  showSelectedPeople(){
    console.log(this.selectedPeople);
    console.log(this.cols);
  }
}
