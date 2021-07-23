import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @Output() getPicture = new EventEmitter<WebcamImage>();
  public showWebcam: boolean = false
  @HostListener('window:resize', ['$event'])

  public width: number = 0;
  public height: number = 0;
  public isCameraExist = true;
  public errors: WebcamInitError[] = [];

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable()
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  onResize(event?: Event) {
    const win = !!event ? (event.target as Window) : window;
    this.width = win.innerWidth;
    this.height = win.innerHeight;
  }

  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  constructor(private cameraService: CameraService) {
    this.onResize()
    this.showWebcam = this.cameraService.cameraStatus
  }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0
      });
  }

  takeSnapshot(): void {
    this.trigger.next()
  }

  onOffWebCame() {
    this.cameraService.closeCamera()
  }

  showNextWebcam(directionOrDeviceId: boolean | string): void {
    this.nextWebcam.next(directionOrDeviceId)
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error)
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId)
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage)
    this.onOffWebCame()
  }

}
