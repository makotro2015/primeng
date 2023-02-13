import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  results: string[] = [];

  constructor(public peopleService: PeopleService){
  }
  ngOnInit(): void {
    this.form.controls.name.valueChanges.subscribe((v)=> console.log('v', v));
  }
  form = new FormGroup ({
    name: new FormControl('')
  })


  search(event: any) {
      this.peopleService.fetchData(event.query).subscribe({
        next: peoples => {
          this.results = peoples;
          console.log('peoples', peoples);
        },
        error: err => console.log(err)
      });
  }
}
