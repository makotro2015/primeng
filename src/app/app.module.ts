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
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DragDropModule} from 'primeng/dragdrop';
import {OrderListModule} from 'primeng/orderlist';

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
import TableComponent from './components/table/table.component';
import { ColumnChangeComponent } from './components/table/column-change/column-change.component';

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
    TableComponent,
    ColumnChangeComponent,
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
    TableModule,
    DialogModule,
    DragDropModule,
    OrderListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
