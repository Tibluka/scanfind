import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input('active') active: boolean | undefined
  @Output() closeMenu = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickedOutside(e: Event) {
    if (this.active) {
      this.closeMenu.emit(true)
    }
  }

  navigate(route: string){
    this.closeMenu.emit(true)
    this.router.navigate([`/${route}`])
  }

}
