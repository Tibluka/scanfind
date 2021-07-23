import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { ResultListComponent } from './result-list/result-list.component'
import { CameraModule } from 'src/app/components/camera/camera.module';


@NgModule({
  declarations: [
    SearchComponent,
    ResultListComponent
  ],
  imports: [
    CommonModule,
    CameraModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent
      }
    ])
  ]
})
export class SearchModule { }
