import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  @Input() item: any;
  name: string;
  coatOfArms: string;
  region: string;
  words: string;

  constructor() { }

  ngOnInit() {
    if (this.item) {
      this.name = this.item.name;
      this.coatOfArms = this.item.coatOfArms;
      this.region = this.item.region;
      this.words = this.item.words;
    }
  }
}
