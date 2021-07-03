import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { ResultListComponent } from './result-list/result-list.component'


@NgModule({
  declarations: [SearchComponent, ResultListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent
      }
    ])
  ]
})
export class SearchModule { }
