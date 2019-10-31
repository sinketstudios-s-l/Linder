import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
let AdMobService = class AdMobService {
    constructor(adMob) {
        this.adMob = adMob;
        this.rewardVideoConfig = {
            isTesting: false,
            autoShow: true,
            id: "ca-app-pub-3993710682934611/1349825671"
        };
        this.bannerConfig = {
            isTesting: false,
            autoShow: true,
            id: "ca-app-pub-3993710682934611/9224446268"
        };
    }
    banner() {
        this.adMob.banner.config(this.bannerConfig);
        this.adMob.banner.prepare()
            .then(ev => {
            console.log(ev);
        }).catch(err => console.log(err));
    }
    reward() {
        this.adMob.rewardVideo.config(this.rewardVideoConfig);
        this.adMob.rewardVideo.prepare()
            .then(ev => {
            console.log(ev);
        }).catch(err => console.log(err));
    }
    hideAd() {
        this.adMob.banner.hide();
    }
    showAd() {
        this.adMob.banner.show();
    }
};
AdMobService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AdMobFree])
], AdMobService);
export { AdMobService };
//# sourceMappingURL=ad-mob.service.js.map