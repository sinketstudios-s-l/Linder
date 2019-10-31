import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';
import { AdMobService } from 'src/app/services/ad-mob.service';
let DiamondsPage = class DiamondsPage {
    constructor(afs, userSvc, adMobSvc) {
        this.afs = afs;
        this.userSvc = userSvc;
        this.adMobSvc = adMobSvc;
    }
    ngOnInit() {
        this.mainUser = this.afs.doc(`users/${this.userSvc.getUID()}`);
        this.subUser = this.mainUser.valueChanges().subscribe(ev => {
            this.diamonds = ev.diamonds;
            if (this.diamonds >= 1000 && this.diamonds <= 9999) {
                this.diamonds = Number(this.diamonds).toFixed(0).substr(0, 1) + '.' + Number(this.diamonds).toFixed(0).substr(1, 3);
            }
            else if (this.diamonds >= 10000 && this.diamonds <= 99999) {
                this.diamonds = Number(this.diamonds).toFixed(0).substr(0, 2) + ' k';
            }
            else if (this.diamonds >= 100000) {
                this.diamonds = Number(this.diamonds).toFixed(0).substr(0, 3) + ' k';
            }
        });
    }
    diamondsPay(d) {
        const id = d.target.id;
        console.log(id);
    }
    reward() {
        this.adMobSvc.reward();
    }
};
DiamondsPage = tslib_1.__decorate([
    Component({
        selector: 'app-diamonds',
        templateUrl: './diamonds.page.html',
        styleUrls: ['./diamonds.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        UserService,
        AdMobService])
], DiamondsPage);
export { DiamondsPage };
//# sourceMappingURL=diamonds.page.js.map