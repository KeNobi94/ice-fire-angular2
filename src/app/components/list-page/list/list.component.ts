import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../../services/http.service';

import { enums } from '../../../shared/enums';
import { IType } from '../../../shared/IType';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  private listType: IType;
  private items: any[];
  private subscription: any;

  constructor(private httpService: HttpService) {
    this.listType = enums.books;
  }

  ngOnInit() {
    this.getList(this.listType.url);
  }

  change(item: IType): void {
    this.listType = item;
    this.getList(item.url);
  }

  private getList(url: string): void {
    this.subscription = this.httpService
      .getResultList(url)
      .subscribe(list => this.items = list);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
