import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { CameraService } from './services/camera.service';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('200ms ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('200ms ease-in', style({ opacity: 0 }))])]),
    trigger('slide', [
      state('left', style({ transform: 'translateX(-100%)' })),
      state('right', style({ transform: 'translateX(100%)' })),
      transition('* => *', animate(400))
    ]),
  ]
})
export class AppComponent {
  public title: string = 'scanfind';
  public menuIsActive: boolean = false
  public showWebcam: boolean = false

  constructor(public menuService: MenuService,
    public cameraService: CameraService) {
    this.showWebcam = cameraService.cameraStatus
    this.menuIsActive = menuService.menuStatus
  }

  ngOnInit(): void {
  }

  closeMenu(event: any) {
    this.menuIsActive = false
  }

  openMenu(event: any) {
    this.menuIsActive = event
  }

  displayImageTaken(e: WebcamImage) {
    this.cameraService.base64 = e.imageAsDataUrl.replace('"', '')
    this.cameraService.shotIsTaken = true
  }


}
