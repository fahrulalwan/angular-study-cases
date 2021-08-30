import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {PopupService} from "../../shared/popup/popup.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authService: AuthService, private popupService: PopupService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.popupService.toggle();
    void this.authService.signOut();
  }
}
