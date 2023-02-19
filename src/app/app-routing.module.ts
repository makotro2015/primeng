import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CascadeSelectComponent } from './components/cascade-select/cascade-select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { AutocompleteComponent } from './components/people/autocomplete.component';
import { SplitterComponent } from './components/splitter/splitter.component';
import TableComponent from './components/table/table.component';

const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'cascadeSelect', component: CascadeSelectComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'fieldset', component: FieldsetComponent },
  { path: 'splitter', component: SplitterComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
