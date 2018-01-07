import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { enums } from '../../shared/enums';
import { IType } from '../../shared/IType';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() change = new EventEmitter();
  buttons: Object;
  titleBtn: string;

  constructor() {
    this.buttons = enums;
    this.titleBtn = enums.books.name;
  }

  ngOnInit() { }

  onChange(btn: IType) {
    if (this.titleBtn !== btn.name) {
      this.titleBtn = btn.name;
      this.change.emit(btn);
    }
  }
}
