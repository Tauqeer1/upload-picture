import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.createSignupForm();


  }

  createSignupForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {

    console.log('valid', this.signupForm.valid);
    console.log('value', this.signupForm.value);
    this.navCtrl.push('UploadPicturePage');
  }
}
