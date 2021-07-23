import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  public shotIsTaken: boolean = false
  public base64: string = ''
  private showWebcam: boolean = false

  get cameraStatus() {
    return this.showWebcam
  }

  constructor() { }

  openCamera() {
    this.showWebcam = true
  }

  closeCamera(){
    this.showWebcam = false
  }

}
