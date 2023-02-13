import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SpeedDialModule} from 'primeng/speeddial';
import {DataViewModule} from 'primeng/dataview';
import {AccordionModule} from 'primeng/accordion';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './components/people/autocomplete.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CascadeSelectComponent } from './components/cascade-select/cascade-select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { SplitterComponent } from './components/splitter/splitter.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    CalendarComponent,
    CascadeSelectComponent,
    CheckboxComponent,
    ChipsComponent,
    DropdownComponent,
    ButtonsComponent,
    AccordionComponent,
    FieldsetComponent,
    SplitterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ImageModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    SplitButtonModule,
    SpeedDialModule,
    DataViewModule,
    AccordionModule,
    DividerModule,
    FieldsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
