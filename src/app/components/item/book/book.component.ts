import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() item: any;
  authors: string[];
  country: string;
  name: string;
  publisher: string;

  constructor() { }

  ngOnInit() {
    if (this.item) {
      this.authors = this.item.authors;
      this.country = this.item.country;
      this.name = this.item.name;
      this.publisher = this.item.publisher;
    }
  }

}
