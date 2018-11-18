import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { UploadPicturePage } from './upload-picture';

@NgModule({
  declarations: [
    UploadPicturePage,
  ],
  imports: [
    IonicPageModule.forChild(UploadPicturePage),
  ],
  providers: [Camera]
})
export class UploadPicturePageModule { }
