import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SearchComponent
      }
    ])
  ]
})
export class SearchModule { }
