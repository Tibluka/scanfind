import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public shotIsTaken: boolean = false
  public base64: string = ''
  public showWebcam

  constructor(private cameraService: CameraService) {
    this.showWebcam = cameraService.cameraStatus
  }

  ngOnInit(): void {
  }

  displayImageTaken(e: WebcamImage) {
    this.base64 = e.imageAsDataUrl.replace('"', '')
    this.shotIsTaken = true
  }

  openCamera() {
    this.cameraService.openCamera()
    console.log(this.cameraService.cameraStatus);
    
  }

}
