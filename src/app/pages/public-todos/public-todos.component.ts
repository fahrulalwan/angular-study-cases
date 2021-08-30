import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {PublicTodosModel} from "./public-todos.resolver";

@Component({
  selector: 'app-public-todos',
  templateUrl: './public-todos.component.html',
  styleUrls: ['./public-todos.component.css']
})
export class PublicTodosComponent implements OnInit {
  resolveData: Observable<PublicTodosModel[]> = this.route.data.pipe(map(data => data.todos));

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('route data', this.route.snapshot.data);
  }

}
