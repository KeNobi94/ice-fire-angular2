import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { enums } from '../../shared/enums';
import { IType } from '../../shared/IType';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  private listType: IType;
  private items: any[];
  private page: number;
  private listSubscription: Subscription;
  private routeSubscription: Subscription;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params
                            .subscribe(params => {
                              if (this.router.url.split('/')[1] === 'books') {
                                this.listType = enums['books'];
                              }
                              this.page = params['page'];
                              this.getList(this.listType.url);
                            });
  }

  change(item: IType): void {
    // this.listType = item;
    // this.getList(item.url);
  }

  private getList(url: string): void {
    this.listSubscription = this.httpService
      .getResultList(url)
      .subscribe(list => this.items = list);
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
