import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private spinner: Ng4LoadingSpinnerService) { }

  public getResultList(url): Observable<any[]> {
    this.spinner.show();
    return this.http
      .get(url)
      .map(res => {
        this.spinner.hide();
        return res as any[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    this.spinner.hide();
    console.log('Error!', error);
    return Observable.throw(error.message || error);
  }

}
