import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  form = new FormGroup ({
    selectedValues: new FormControl(['val1'])
  })

  info(e: Event){
    console.log(e);
  }

  
}
