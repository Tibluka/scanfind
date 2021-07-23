import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public active: boolean = false

  get menuStatus() {
    return this.active
  }

  constructor() { }

  activate() {
    this.active = !this.active
  }

}
