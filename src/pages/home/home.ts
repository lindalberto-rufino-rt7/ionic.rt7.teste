import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthService) {
    //domain: rt7-teste.auth0.com
    //client-id: g5XUUDzfe6UG2AsGV-ORvUKPYOGBwJcY
    //client-secret: zx6DxOz7IP8c7KDvX4X_ZBJkqfF0VAeUMki8O7Bi5U14Hfq99UUCDpR_Zy8P8sXt

    //# replace YOUR_PACKAGE_ID with your app package ID
    //io.ionic.rt7.teste://rt7-teste.auth0.com/cordova/io.ionic.rt7.teste/callback


    //# replace YOUR_PACKAGE_ID with your app identifier
    //cordova plugin add cordova-plugin-customurlscheme --variable URL_SCHEME=io.ionic.rt7.teste --variable ANDROID_SCHEME=io.ionic.rt7.teste --variable ANDROID_HOST=rt7-teste.auth0.com --variable ANDROID_PATHPREFIX=/cordova/io.ionic.rt7.teste/callback
    console.log(auth.isAuthenticated());
  }

}
