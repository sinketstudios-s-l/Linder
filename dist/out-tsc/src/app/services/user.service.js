import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
let UserService = class UserService {
    constructor(afAuth, route, modalCtrl) {
        this.afAuth = afAuth;
        this.route = route;
        this.modalCtrl = modalCtrl;
    }
    setUser(user) {
        this.user = user;
    }
    getUsername() {
        return this.user.email;
    }
    reAuth(email, passwd) {
        return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(email, passwd));
    }
    updatePassword(newpassword) {
        return this.afAuth.auth.currentUser.updatePassword(newpassword);
    }
    updateEmail(newemail) {
        return this.afAuth.auth.currentUser.updateEmail(newemail);
    }
    isAuthenticated() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.user)
                return true;
            const user = yield this.afAuth.authState.pipe(first()).toPromise();
            if (user) {
                this.setUser({
                    email: user.email.split('@')[0],
                    uid: user.uid
                });
                return true;
            }
            return false;
        });
    }
    getUID() {
        return this.user.uid;
    }
    logout() {
        this.modalCtrl.dismiss();
        this.afAuth.auth.signOut();
        this.route.navigate(['/home']).then(() => window.location.reload());
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router, ModalController])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map