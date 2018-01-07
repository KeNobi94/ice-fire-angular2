import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() item: any;
  aliases: string[];
  name: string;
  gender: string;
  culture: string;

  constructor() { }

  ngOnInit() {
    if (this.item) {
      this.aliases = this.item.aliases;
      this.name = this.item.name;
      this.gender = this.item.gender;
      this.culture = this.item.culture;
    }
  }

}
