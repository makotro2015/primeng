import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  activeState: boolean[] = [true, false, false];

  toggle(index: number) {
      this.activeState[index] = !this.activeState[index];
  }
}
