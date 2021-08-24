import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

export interface PublicTodosModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class PublicTodosResolver implements Resolve<PublicTodosModel[]> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PublicTodosModel[]> {
    return this.http.get<PublicTodosModel[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
