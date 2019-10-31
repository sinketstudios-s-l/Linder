import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './services/user.service';
import { MenuPage } from './modals/menu/menu.page';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, afs, userSvc, modalCtrl) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.afs = afs;
        this.userSvc = userSvc;
        this.modalCtrl = modalCtrl;
        this.initializeApp();
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.mainUser = this.afs.doc(`users/${user.uid}`);
                this.subUser = this.mainUser.valueChanges().subscribe(event => {
                    this.userName = event.name;
                    this.userRole = event.role;
                });
            }
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }
    logout() {
        this.userSvc.logout();
    }
    menu(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = e.target.id;
            const modal = yield this.modalCtrl.create({
                component: MenuPage,
                componentProps: {
                    id: id
                }
            });
            yield modal.present();
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        AngularFirestore,
        UserService,
        ModalController])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map