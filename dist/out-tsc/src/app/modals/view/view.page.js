import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobService } from 'src/app/services/ad-mob.service';
let ViewPage = class ViewPage {
    constructor(navParams, afs, statusBar, modalCtrl, userSvc, adMobSvc) {
        this.navParams = navParams;
        this.afs = afs;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.userSvc = userSvc;
        this.adMobSvc = adMobSvc;
        this.sliderOpts = {
            direction: "vertical",
            slidesPerView: 1,
            initialSlide: 0,
        };
        this.statusBar.hide();
        this.adMobSvc.hideAd();
    }
    ngOnInit() {
        var newIndex = this.profileSlider.activeIndex;
        var slide = this.profileSlider.realIndex;
        console.log(slide);
        this.id = this.navParams.get('id');
        this.mainComp = this.afs.doc(`users/${this.id}`);
        this.subComp = this.mainComp.valueChanges().subscribe(ev => {
            this.img = ev.profilePic;
            this.name = ev.name;
            this.role = ev.role;
            this.verificated = ev.verificated;
            const afsTMSP = ev.age.toDate().getFullYear();
            const now = new Date().getFullYear();
            this.age = now - afsTMSP;
        });
    }
    close() {
        this.modalCtrl.dismiss().then(() => {
            this.statusBar.show();
            this.adMobSvc.showAd();
        });
    }
};
tslib_1.__decorate([
    ViewChild('profileSlider', { static: true }),
    tslib_1.__metadata("design:type", Object)
], ViewPage.prototype, "profileSlider", void 0);
ViewPage = tslib_1.__decorate([
    Component({
        selector: 'app-view',
        templateUrl: './view.page.html',
        styleUrls: ['./view.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavParams,
        AngularFirestore,
        StatusBar,
        ModalController,
        UserService,
        AdMobService])
], ViewPage);
export { ViewPage };
//# sourceMappingURL=view.page.js.map