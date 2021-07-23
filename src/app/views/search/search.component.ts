import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public shotIsTaken: boolean = false
  public base64: string = ''
  public showWebcam: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  displayImageTaken(e: WebcamImage) {
    this.base64 = e.imageAsDataUrl.replace('"', '')
    this.shotIsTaken = true
  }

}
