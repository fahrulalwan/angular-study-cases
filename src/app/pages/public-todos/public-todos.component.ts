import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-public-todos',
  templateUrl: './public-todos.component.html',
  styleUrls: ['./public-todos.component.css']
})
export class PublicTodosComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('route data', this.route.snapshot.data);
  }

}
