import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'Home'

  @Output() activate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.activate.emit(true)
  }

}
