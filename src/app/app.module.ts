import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonSlides } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// FIREBASE
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { DiamondsPageModule } from './components/diamonds/diamonds.module';

// ADMOB FREE SERVICE
import { AdMobService } from './services/ad-mob.service';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

// FIRE CLOUD MESSAGING
import { FCM } from '@ionic-native/fcm/ngx';
import { MenuPageModule } from './modals/menu/menu.module';
import { ViewPageModule } from './modals/view/view.module';

var firebaseConfig = {
  apiKey: "AIzaSyAW5RKeTu8evFrIhRo53nu7uUF4LZ999Mc",
  authDomain: "linder-ss.firebaseapp.com",
  databaseURL: "https://linder-ss.firebaseio.com",
  projectId: "linder-ss",
  storageBucket: "linder-ss.appspot.com",
  messagingSenderId: "87330289108",
  appId: "1:87330289108:web:599e01fa688913b18b1241",
  measurementId: "G-SK316E2T9C"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    FormsModule,
    DiamondsPageModule,
    MenuPageModule,
    ViewPageModule
  ],
  providers: [
    AuthService,
    UserService,
    AdMobService,
    AdMobFree,
    FCM,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
