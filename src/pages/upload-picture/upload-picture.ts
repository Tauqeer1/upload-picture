import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-upload-picture',
  templateUrl: 'upload-picture.html',
})
export class UploadPicturePage {

  pictureData: any;
  isImage = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera, private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPicturePage');
  }


  selectPicture() {
    console.log('select picture');
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Camera-Gallery',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.getCameraPicture();
          }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.getGallerPicture();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  getGallerPicture() {
    //console.log('Gallery');
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 500,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.isImage = true;
      this.pictureData = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.error('err getGallerPicture picture', err);
    });
  }

  getCameraPicture() {
    //console.log('Camera');
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth: 500,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.isImage = true;
      this.pictureData = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.error('err getCamerara picture', err);
    });
  }

  uploadPicture() {
    console.log('upload picture', this.pictureData);
    this.navCtrl.push('ResultsPage', { result: (Math.floor(Math.random() * 101) + 1) % 2 === 0 ? '4B' : '4C' });
  }

}
