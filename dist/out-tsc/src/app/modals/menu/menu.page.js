import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
let MenuPage = class MenuPage {
    constructor(navParams, modalCtrl) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.id = this.navParams.get('id');
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
MenuPage = tslib_1.__decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.page.html',
        styleUrls: ['./menu.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavParams,
        ModalController])
], MenuPage);
export { MenuPage };
//# sourceMappingURL=menu.page.js.map