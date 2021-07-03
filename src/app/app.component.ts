import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scanfind';

  public menuIsActive: boolean = false

  constructor(public menuService: MenuService){

  }

  ngOnInit(): void {

  }

  openMenu(event: any){
    debugger
    this.menuIsActive = event
  }
  


}
