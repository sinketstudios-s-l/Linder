import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
let SessionService = class SessionService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    emailSignUp(email, passwd) {
    }
};
SessionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
], SessionService);
export { SessionService };
//# sourceMappingURL=session.service.js.map