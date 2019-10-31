import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AdMobService } from '../services/ad-mob.service';
let LoginPage = class LoginPage {
    constructor(formBuilder, afAuth, afs, userSvc, router, menuCtrl, adMobSvc) {
        this.formBuilder = formBuilder;
        this.afAuth = afAuth;
        this.afs = afs;
        this.userSvc = userSvc;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.adMobSvc = adMobSvc;
        this.slideOpts = {
            initialSlide: 5,
            slidesPerView: 1,
            autoHeight: true,
            allowTouchMove: false,
            speed: 800,
        };
        this.loginF = 0;
        this.loading = 0;
    }
    ngOnInit() {
        this.menuCtrl.enable(false, 'main');
        this.adMobSvc.hideAd();
        if (this.userSvc.isAuthenticated()) {
            this.router.navigate(['/home']);
        }
        this.dateLimit = new Date().getFullYear() - 18;
        this.nameForm = this.formBuilder.group({
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(4),
                Validators.pattern('[a-zA-Z ]*')
            ]))
        });
        this.dateForm = this.formBuilder.group({
            date: new FormControl('', Validators.compose([
                Validators.required,
            ]))
        });
        this.regForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email,
                Validators.minLength(4)
            ])),
            passwd: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(25)
            ]))
        });
        this.loginForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email,
                Validators.minLength(4)
            ])),
            passwd: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(25)
            ]))
        });
    }
    next() {
        this.nombre = this.nameForm.get('name').value;
        this.signupSlider.slideNext();
    }
    prev() {
        this.signupSlider.slidePrev();
    }
    gender(g) {
        this.signupSlider.slideNext();
        this.gen = g.target.id;
    }
    interest(i) {
        this.signupSlider.slideNext();
        this.int = i.target.id;
    }
    role(r) {
        this.signupSlider.slideNext();
        this.rol = r.target.id;
    }
    dateAge() {
        var date = this.dateForm.get('date').value;
        console.log(new Date(date));
    }
    logForm() {
        this.loginF = 1;
        document.getElementById('regContainer').style.display = "none";
    }
    regisForm() {
        this.loginF = 0;
        document.getElementById('regContainer').style.display = "block";
    }
    signup() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = 1;
            var name = this.nameForm.get('name').value;
            var date = this.dateForm.get('date').value;
            var gen = this.gen;
            var int = this.int;
            var email = this.regForm.get('email').value;
            var passwd = this.regForm.get('passwd').value;
            try {
                const res = yield this.afAuth.auth.createUserWithEmailAndPassword(email, passwd);
                this.afs.doc(`users/${res.user.uid}`).set({
                    name,
                    email,
                    verificated: false,
                    date: new Date(),
                    age: new Date(date),
                    gender: gen,
                    interest: int,
                    uid: res.user.uid,
                    role: this.rol,
                    diamonds: Number(300),
                    profilePic: ""
                }).then(() => {
                    this.router.navigate(['/home']).then(() => window.location.reload()).finally(() => this.loading = 0);
                });
                this.userSvc.setUser({
                    email,
                    uid: res.user.uid
                });
            }
            catch (_a) {
            }
        });
    }
    signin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = 1;
            var email = this.loginForm.get('email').value;
            var passwd = this.loginForm.get('passwd').value;
            try {
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(email, passwd);
                if (res.user) {
                    this.userSvc.setUser({
                        email,
                        uid: res.user.uid
                    });
                    this.router.navigate(['/home']).then(() => window.location.reload()).finally(() => this.loading = 0);
                }
            }
            catch (err) {
                if (err == "auth/user-not-found") {
                    console.log('user not found');
                }
                else if (auth / wrong - password)
                    console.dir(err);
            }
        });
    }
};
tslib_1.__decorate([
    ViewChild('signupSlider', { static: true }),
    tslib_1.__metadata("design:type", Object)
], LoginPage.prototype, "signupSlider", void 0);
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        AngularFireAuth,
        AngularFirestore,
        UserService,
        Router,
        MenuController,
        AdMobService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map