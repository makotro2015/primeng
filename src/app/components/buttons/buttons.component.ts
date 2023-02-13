import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  items = [
    {label: 'Update', icon: 'pi pi-refresh', command: () => {
        this.clickButton();
    }},
    {label: 'Delete', icon: 'pi pi-times', command: () => {
        this.clickButton();
    }},
    {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
    {separator: true},
    {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
];
  handleClick(e: any){
    console.log('click!', e);
  }

  clickButton(){
    console.log('button is clicked!');
  }
}
