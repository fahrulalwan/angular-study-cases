import {Injectable} from '@angular/core';

@Injectable()
export class PopupService {
  isPopupOpen = false;

  constructor() {
  }

  toggle(): void {
    this.isPopupOpen = !this.isPopupOpen;
  }
}
