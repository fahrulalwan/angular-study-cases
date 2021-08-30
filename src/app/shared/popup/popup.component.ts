import { Component, OnInit } from '@angular/core';
import {PopupService} from "./popup.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public popupService: PopupService) { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.popupService.toggle();
  }

}
