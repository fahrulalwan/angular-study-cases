import { Component, OnInit } from '@angular/core';
import {TopicModel} from "./topic-card/topic.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topicsList = [
    new TopicModel().convert({
      id: 1,
      topic: 'canActivate',
      href: '/user',
      description: 'canactivate'
    }),
    new TopicModel().convert({
      id: 2,
      topic: 'canDeactivate',
      href: '/myform',
      description: 'canactivate'
    }),
    new TopicModel().convert({
      id: 3,
      topic: 'State Management',
      description: 'canactivate'
    }),
    new TopicModel().convert({
      id: 4,
      topic: 'Resolve',
      href: '/public-todos',
      description: 'canactivate'
    }),
    new TopicModel().convert({
      id: 5,
      topic: 'Shared Components',
      description: 'canactivate'
    }),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
