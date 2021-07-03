import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public active: boolean = false

  constructor() { }

  activate() {
    this.active = !this.active
  }

}
