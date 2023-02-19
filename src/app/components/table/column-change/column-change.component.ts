import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Man, PeopleColumn } from 'src/app/interface/interface';

@Component({
  selector: 'app-column-change',
  templateUrl: './column-change.component.html',
  styleUrls: ['./column-change.component.scss']
})
export class ColumnChangeComponent implements OnInit {
  tableIsVisible: boolean = false;
  selectedCols: string[] = [];
  newCols: PeopleColumn[] = [];
  draggedRow: any;
  c = [{}]

  @Input() columns: PeopleColumn[] = [];
  @Output() setColumns = new EventEmitter();

  ngOnInit(): void {
    this.newCols = JSON.parse(JSON.stringify(this.columns));
    this.selectedCols = this.newCols
      .filter((col: PeopleColumn) => col.visible === true)
      .map((col: PeopleColumn)=> col.value)
  }

  showDialog() {
      this.tableIsVisible = true;
  }

  public submit(): void {
    this.setColumns.emit(this.newCols);
    this.tableIsVisible = false;
  }

  public changeVisibleRow(column: any, event: any): void {
    const value = column.value;
    this.newCols.map((col: PeopleColumn)=> {
      if (value === col.value)
      col.visible = event.checked.includes(value);
    })
  }

  public selectAll(): void {
    this.selectedCols = this.columns.map(col=>col.value);
    this.newCols = this.newCols.map(column => ({...column, visible: true}));
  }

  public resetAll(): void {
    this.selectedCols = [];
    this.newCols = this.newCols.map(column => ({...column, visible: false}));
  }
}