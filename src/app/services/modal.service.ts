import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visible: boolean = false;

  constructor() {}

  isModalOpen() {
    return this.visible;
  }

  toggleModal() {
    this.visible = !this.visible;
  }
}
