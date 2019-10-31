(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" mode=\"ios\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Thunder\n    </ion-title>\n    <!-- <ion-searchbar mode=\"ios\" color=\"light\"></ion-searchbar> -->\n    <ion-buttons slot=\"end\" margin-end>\n      <ion-button mode=\"ios\" (click)=\"diamondsPop()\">\n        <svg slot=\"start\" class=\"diamonds\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\"\n          xml:space=\"preserve\">\n          <polygon style=\"fill:#f0d4ff;\" points=\"360.129,172.138 256,472.276 512,172.138 \" />\n          <g>\n            <polygon style=\"fill:#e9c0ff;\" points=\"105.931,39.724 0,172.138 151.871,172.138  \" />\n            <polygon style=\"fill:#e9c0ff;\" points=\"360.129,172.138 512,172.138 406.069,39.724  \" />\n            <polygon style=\"fill:#e9c0ff;\" points=\"360.129,172.138 256,39.724 151.871,172.138  \" />\n          </g>\n          <polygon style=\"fill:#da9ff9;\" points=\"256,39.724 105.931,39.724 151.871,172.138 \" />\n          <polygon style=\"fill:#f0d4ff;\" points=\"406.069,39.724 256,39.724 360.129,172.138 \" />\n          <polygon style=\"fill:#da9ff9;\" points=\"151.871,172.138 256,472.276 360.129,172.138 \" />\n          <polygon style=\"fill:#c88de7;\" points=\"0,172.138 256,472.276 151.871,172.138 \" />\n        </svg>\n        <ion-label class=\"diamondsCount\" slot=\"start\">{{ diamonds }}</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"headers\">\n      <h4 *ngIf=\"userRole == 'companied'\">Acompañantes</h4>\n      <h4 *ngIf=\"userRole == 'companion'\">Personas que buscan compañía.</h4>\n    </div>\n    <ion-grid>\n      <ion-row id=\"rowList\">\n        <!-- companion cards -->\n      </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: none;\n  --color: #ffffff;\n}\n\n.diamonds {\n  width: 24px;\n  height: 24px;\n}\n\n.diamondsCount {\n  margin-left: 0.5rem;\n  color: #ffffff;\n}\n\nion-content {\n  --background: #ad5389;\n  --background: -webkit-linear-gradient(to top, #511670, #ad5389);\n  --background: linear-gradient(to top, #511670, #ad5389);\n  --color: #fff;\n}\n\nion-header ion-toolbar {\n  --background: #ad5389;\n  --color: #fff;\n}\n\nion-col.companionRow {\n  padding: 5px;\n}\n\nion-card.companionCard {\n  margin: 0;\n  padding: 0;\n  --background: #fff !important;\n}\n\nsvg.verificatedIcon {\n  fill: white;\n}\n\n.headers {\n  width: 100%;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaW5rZXRTdHVkaW9zL0Rlc2t0b3AvTGluZGVyL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsK0RBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kaWFtb25kc3tcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5kaWFtb25kc0NvdW50e1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYWQ1Mzg5O1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNTExNjcwLCAjYWQ1Mzg5KTsgXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNTExNjcwLCAjYWQ1Mzg5KTsgXG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICNhZDUzODk7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWNvbC5jb21wYW5pb25Sb3d7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5pb24tY2FyZC5jb21wYW5pb25DYXJke1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5zdmcudmVyaWZpY2F0ZWRJY29ue1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4uaGVhZGVyc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kaWFtb25kcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5kaWFtb25kc0NvdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjYWQ1Mzg5O1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzUxMTY3MCwgI2FkNTM4OSk7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzUxMTY3MCwgI2FkNTM4OSk7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNhZDUzODk7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbmlvbi1jb2wuY29tcGFuaW9uUm93IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5pb24tY2FyZC5jb21wYW5pb25DYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuc3ZnLnZlcmlmaWNhdGVkSWNvbiB7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4uaGVhZGVycyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_diamonds_diamonds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/diamonds/diamonds.page */ "./src/app/components/diamonds/diamonds.page.ts");
/* harmony import */ var _services_ad_mob_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/ad-mob.service */ "./src/app/services/ad-mob.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _modals_view_view_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/view/view.page */ "./src/app/modals/view/view.page.ts");










var HomePage = /** @class */ (function () {
    function HomePage(userSvc, router, afs, popOverCtrl, menuCtrl, platform, adMobSvc, fcm, modalCtrl) {
        this.userSvc = userSvc;
        this.router = router;
        this.afs = afs;
        this.popOverCtrl = popOverCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.adMobSvc = adMobSvc;
        this.fcm = fcm;
        this.modalCtrl = modalCtrl;
        this.compViews = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userSvc.isAuthenticated()) {
            this.router.navigate(['/login']);
        }
        else {
            this.platform.ready().then(function () {
                _this.adMobSvc.banner();
                // USER 
                _this.mainUser = _this.afs.doc("users/" + _this.userSvc.getUID());
                _this.subUser = _this.mainUser.valueChanges().subscribe(function (ev) {
                    _this.name = ev.name;
                    _this.diamonds = ev.diamonds;
                    _this.userInterest = ev.interest;
                    _this.userRole = ev.role;
                    _this.token = ev.token;
                    if (_this.token == "" || _this.token == null) {
                        var token = localStorage.getItem('token');
                        _this.afs.doc("users/" + _this.userSvc.getUID()).update({
                            token: token
                        });
                    }
                    if (_this.userInterest === 'female' && _this.userRole == 'companied') {
                        _this.afs.collection('users').ref.where('role', "==", "companion")
                            .where('gender', '==', 'female').orderBy('rate', 'desc').get()
                            .then(function (snapshop) {
                            snapshop.docs.forEach(function (doc) {
                                _this.renderList(doc);
                            });
                        });
                    }
                    else if (_this.userInterest === 'male' && _this.userRole == 'companied') {
                        _this.afs.collection('users').ref.where('role', "==", "companion")
                            .where('gender', '==', 'male').orderBy('rate', 'desc').get()
                            .then(function (snapshop) {
                            snapshop.docs.forEach(function (doc) {
                                _this.renderList(doc);
                            });
                        });
                    }
                    else if (_this.userInterest === 'both' && _this.userRole == 'companied') {
                        _this.afs.collection('users').ref.where('role', "==", "companion")
                            .orderBy('rate', 'desc').get()
                            .then(function (snapshop) {
                            snapshop.docs.forEach(function (doc) {
                                _this.renderList(doc);
                            });
                        });
                    }
                    else if (_this.userInterest === 'female' && _this.userRole == 'companion') {
                        _this.afs.collection('users').ref.where('role', "==", "companied")
                            .orderBy('rate', 'desc').get()
                            .then(function (snapshop) {
                            snapshop.docs.forEach(function (doc) {
                                _this.renderList(doc);
                            });
                        });
                    }
                    else if (_this.userInterest === 'male' && _this.userRole == 'companion') {
                        _this.afs.collection('users').ref.where('role', "==", "companied")
                            .orderBy('rate', 'desc').get()
                            .then(function (snapshop) {
                            snapshop.docs.forEach(function (doc) {
                                _this.renderList(doc);
                            });
                        });
                    }
                    else if (_this.userInterest === 'both' && _this.userRole == 'companion') {
                        _this.afs.collection('users').ref.where('role', "==", "companied")
                            .orderBy('rate', 'desc').get()
                            .then(function (snapshop) {
                            snapshop.docs.forEach(function (doc) {
                                _this.renderList(doc);
                            });
                        });
                    }
                    if (_this.diamonds >= 1000 && _this.diamonds <= 9999) {
                        _this.diamonds = Number(_this.diamonds).toFixed(0).substr(0, 1) + '.' + Number(_this.diamonds).toFixed(0).substr(1, 3);
                    }
                    else if (_this.diamonds >= 10000 && _this.diamonds <= 99999) {
                        _this.diamonds = Number(_this.diamonds).toFixed(0).substr(0, 2) + ' k';
                    }
                    else if (_this.diamonds >= 100000) {
                        _this.diamonds = Number(_this.diamonds).toFixed(0).substr(0, 3) + ' k';
                    }
                });
                // END USER
            });
        }
    };
    HomePage.prototype.renderList = function (doc) {
        var _this = this;
        var compList = document.getElementById('rowList');
        /// TIMESTAMP TO DATE TO AGE CONVERSION ///
        var gender = doc.data().gender;
        var afsTMSP = doc.data().age.toDate().getFullYear();
        var now = new Date().getFullYear();
        var age = now - afsTMSP;
        ///////////////////////////////////////////
        var col = document.createElement('ion-col');
        var gen = document.createElement('ion-icon');
        var card = document.createElement('ion-card');
        var divImg = document.createElement('div');
        var img = document.createElement('img');
        var cardContent = document.createElement('div');
        var name = document.createElement('h6');
        var desc = document.createElement('p');
        var verificated = doc.data().verificated;
        var role = doc.data().role;
        col.setAttribute('size', '6');
        card.setAttribute('id', doc.id);
        gen.setAttribute('id', doc.id);
        img.setAttribute('id', doc.id);
        cardContent.setAttribute('id', doc.id);
        name.setAttribute('id', doc.id);
        if (gender == 'female') {
            gen.setAttribute('name', 'female');
            gen.setAttribute('mode', 'ios');
            gen.style.color = "#da70d6";
        }
        else if (gender == 'male') {
            gen.setAttribute('name', 'male');
            gen.setAttribute('mode', 'ios');
            gen.style.color = "#0000ff";
        }
        else if (gender == 'trans') {
            gen.setAttribute('name', 'transgender');
            gen.setAttribute('mode', 'md');
            gen.style.color = "#a6ff00";
        }
        gen.style.position = "absolute";
        gen.style.top = "1rem";
        gen.style.right = "1rem";
        gen.style.fontSize = "20px";
        card.style.margin = "0";
        card.style.background = "#fff";
        card.style.color = "#fff";
        divImg.style.width = "100%";
        divImg.style.objectFit = "cover";
        divImg.style.position = "relative";
        cardContent.style.position = "absolute";
        cardContent.style.bottom = "0rem";
        cardContent.style.left = "0rem";
        cardContent.style.padding = "10px";
        cardContent.style.width = "100%";
        cardContent.style.verticalAlign = "middle";
        cardContent.style.margin = "0 auto";
        cardContent.style.background = "#000000";
        cardContent.style.background = "-webkit-linear-gradient(to top, #000000bb, #00000000)";
        cardContent.style.background = "linear-gradient(to top, #000000bb, #00000000)";
        name.style.margin = "0";
        desc.style.margin = "0";
        desc.style.whiteSpace = "nowrap";
        img.src = doc.data().profilePic;
        if (verificated == true && role == 'companion') {
            name.innerHTML = name.textContent = doc.data().name + ', ' + age + ' ' + '<svg style="fill:white; vertical-align: top;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 509.604 509.604" xml:space="preserve"><g><g><path d="M34.262,333.282c8.119,6.75,14.793,15.223,14.143,20.988c-0.382,3.443-0.593,6.943-0.593,10.5    c0,52.393,41.3,94.861,92.24,94.861c6.292,0,12.431-0.65,18.37-1.885c10.002-2.074,21.812,1.941,28.888,9.793    c16.82,18.646,40.803,30.342,67.492,30.342c28.19,0,53.426-13.016,70.342-33.518c6.723-8.146,18.103-11.533,28.22-8.5    c8.166,2.447,16.811,3.768,25.751,3.768c50.939,0,92.24-42.477,92.24-94.861c0-5.861-0.535-11.59-1.549-17.145    c-1.712-9.371,2.85-21.047,10.471-28.363c18.025-17.289,29.328-41.883,29.328-69.242c0-29.787-13.368-56.323-34.263-73.698    c-8.118-6.751-14.793-15.224-14.143-20.99c0.383-3.442,0.593-6.942,0.593-10.5c0-52.393-41.301-94.86-92.24-94.86    c-6.292,0-12.431,0.65-18.369,1.884c-10.002,2.075-21.812-1.941-28.889-9.792c-16.82-18.647-40.803-30.342-67.492-30.342    c-26.688,0-50.671,11.695-67.492,30.342c-7.076,7.841-18.886,11.867-28.888,9.792c-5.938-1.234-12.078-1.884-18.37-1.884    c-50.939,0-92.24,42.477-92.24,94.86c0,5.049,0.392,10.002,1.147,14.832c1.262,8.128-4.447,18.149-12.747,24.681    C14.219,201.663,0,228.887,0,259.583C0,289.37,13.368,315.907,34.262,333.282z M131.475,263.016    c2.046-3.625,7.268-3.672,12.049,0.479l48.119,33.918c2.61,1.588,5.106,2.4,7.506,2.4c4.963,0,8.893-3.576,12.689-7.02    l153.985-154.138c9.629-10.471,18.99-14.162,25.102-10.146c2.82,1.855,4.646,4.647,5.135,7.87    c0.583,3.825-0.756,7.946-3.768,11.599l-185.149,224.91c-2.687,3.26-6.11,5.059-9.629,5.059c-4.179,0-7.965-2.516-10.404-6.895    l-54.344-97.969C130.519,269.422,130.021,265.618,131.475,263.016z"/></g></g></svg>';
        }
        else if (verificated == false && role == 'companion') {
            name.textContent = doc.data().name + ', ' + age;
        }
        else if (verificated == true && role == 'companied') {
            name.innerHTML = name.textContent = doc.data().name + ', ' + age + ' ' + '<svg style="fill:yellow; vertical-align: top;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 32.148 32.148" style="enable-background:new 0 0 32.148 32.148;" xml:space="preserve"><g><g><path d="M3.171,19.56c0,0,0.313-1.268-0.739-2.367c-1.056-1.101-2.382-1.105-2.382-1.105s-0.33,1.489,0.698,2.562    C1.775,19.72,3.171,19.56,3.171,19.56z"/><path d="M5.5,19.33c0,0,1.233-0.669,1.459-2.139c0.227-1.466-0.9-2.498-0.9-2.498s-1.08,0.768-1.313,2.274    C4.515,18.474,5.5,19.33,5.5,19.33z"/><path d="M7.354,23.029c0,0,1.136-0.827,1.169-2.312c0.03-1.483-1.221-2.358-1.221-2.358s-0.971,0.9-1.004,2.425    C6.265,22.308,7.354,23.029,7.354,23.029z"/><path d="M11.076,22.754c-0.108-1.479-1.436-2.233-1.436-2.233s-0.882,0.987-0.772,2.508c0.11,1.521,1.262,2.136,1.262,2.136    S11.183,24.234,11.076,22.754z"/><path d="M13.617,27.009c0,0,0.743-1.191,0.214-2.58c-0.529-1.388-2.019-1.728-2.019-1.728s-0.561,1.202-0.019,2.627    C12.337,26.751,13.617,27.009,13.617,27.009z"/><path d="M3.685,16.312c0,0,0.966-0.879,0.699-2.379c-0.267-1.499-1.366-2.242-1.366-2.242s-1.101,1.058-0.841,2.521    C2.437,15.672,3.685,16.312,3.685,16.312z"/><path d="M4.443,22.437c0,0-0.074-1.305-1.404-2.045c-1.333-0.738-2.602-0.355-2.602-0.355s0.124,1.521,1.422,2.242    C3.159,23,4.443,22.437,4.443,22.437z"/><path d="M6.688,24.969c0,0-0.362-1.255-1.823-1.681c-1.464-0.426-2.616,0.23-2.616,0.23s0.461,1.455,1.886,1.871    C5.562,25.806,6.688,24.969,6.688,24.969z"/><path d="M9.199,26.773c0,0-0.724-1.086-2.246-1.049c-1.524,0.037-2.424,1.01-2.424,1.01s0.88,1.25,2.363,1.213    C8.377,27.913,9.199,26.773,9.199,26.773z"/><path d="M10.271,27.509c-1.508,0.221-2.284,1.294-2.284,1.294s1.021,1.136,2.491,0.923c1.471-0.214,2.148-1.442,2.148-1.442    S11.778,27.292,10.271,27.509z"/><path d="M4.182,17.058l-0.727-0.029c-0.002,0.08-0.183,7.955,11.7,11.505l0.208-0.696C4.048,24.457,4.169,17.357,4.182,17.058z"/><path d="M28.977,19.581c0,0,1.396,0.16,2.423-0.912c1.028-1.072,0.698-2.562,0.698-2.562s-1.326,0.006-2.383,1.106    C28.662,18.314,28.977,19.581,28.977,19.581z"/><path d="M25.188,17.212c0.226,1.469,1.459,2.139,1.459,2.139s0.984-0.855,0.755-2.361c-0.233-1.507-1.313-2.274-1.313-2.274    S24.962,15.746,25.188,17.212z"/><path d="M24.846,18.379c0,0-1.251,0.875-1.222,2.358c0.033,1.483,1.169,2.312,1.169,2.312s1.089-0.722,1.057-2.245    C25.816,19.282,24.846,18.379,24.846,18.379z"/><path d="M21.071,22.775c-0.106,1.479,0.946,2.408,0.946,2.408s1.15-0.613,1.262-2.135c0.109-1.521-0.772-2.509-0.772-2.509    S21.181,21.294,21.071,22.775z"/><path d="M18.316,24.45c-0.529,1.388,0.214,2.579,0.214,2.579s1.279-0.258,1.823-1.68c0.542-1.425-0.02-2.628-0.02-2.628    S18.847,23.062,18.316,24.45z"/><path d="M28.463,16.333c0,0,1.248-0.64,1.509-2.101c0.26-1.463-0.842-2.521-0.842-2.521s-1.1,0.743-1.365,2.242    C27.497,15.454,28.463,16.333,28.463,16.333z"/><path d="M29.107,20.413c-1.33,0.739-1.404,2.044-1.404,2.044s1.285,0.564,2.584-0.157c1.298-0.721,1.422-2.243,1.422-2.243    S30.44,19.673,29.107,20.413z"/><path d="M27.281,23.31c-1.461,0.426-1.823,1.681-1.823,1.681s1.128,0.836,2.555,0.421c1.425-0.415,1.886-1.871,1.886-1.871    S28.745,22.883,27.281,23.31z"/><path d="M25.194,25.745c-1.522-0.037-2.246,1.05-2.246,1.05s0.821,1.139,2.307,1.174c1.483,0.036,2.363-1.213,2.363-1.213    S26.72,25.783,25.194,25.745z"/><path d="M21.876,27.529c-1.508-0.217-2.354,0.773-2.354,0.773s0.678,1.229,2.147,1.443c1.471,0.213,2.491-0.924,2.491-0.924    S23.384,27.75,21.876,27.529z"/><path d="M28.692,17.048l-0.728,0.029c0.013,0.301,0.134,7.398-11.181,10.779l0.208,0.695    C28.875,25.003,28.694,17.128,28.692,17.048z"/><polygon points="21.771,20.214 20.945,13.495 25.443,8.924 18.996,8.062 16.076,2.404 16.076,2.376 13.15,8.042 6.704,8.903     11.202,13.475 10.377,20.193 16.071,17.099 16.071,17.117"/></g></g></svg>';
        }
        else if (verificated == false && role == 'companied') {
            name.textContent = doc.data().name + ', ' + age;
        }
        desc.textContent = doc.data().desc;
        card.addEventListener('click', function (ev) {
            _this.modalView(ev);
        });
        col.appendChild(card);
        card.appendChild(divImg);
        divImg.appendChild(img);
        divImg.appendChild(cardContent);
        divImg.appendChild(gen);
        cardContent.appendChild(name);
        cardContent.appendChild(desc);
        compList.appendChild(col);
    };
    HomePage.prototype.modalView = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.id = e.target.id;
                        this.mainComp = this.afs.doc("users/" + this.id);
                        this.subComp = this.mainComp.valueChanges().subscribe(function (ev) {
                            _this.compViews = ev.views;
                        });
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_view_view_page__WEBPACK_IMPORTED_MODULE_9__["ViewPage"],
                                componentProps: {
                                    id: this.id
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present().then(function () {
                                _this.afs.doc("users/" + _this.id).update({
                                    views: _this.compViews + 1,
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.diamondsPop = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var diamonds;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popOverCtrl.create({
                            component: _components_diamonds_diamonds_page__WEBPACK_IMPORTED_MODULE_6__["DiamondsPage"],
                            cssClass: 'diamondsPopOver',
                            translucent: true
                        })];
                    case 1:
                        diamonds = _a.sent();
                        return [4 /*yield*/, diamonds.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, 'main');
        this.menuCtrl.open('main');
    };
    HomePage.prototype.logout = function () {
        this.userSvc.logout();
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _services_ad_mob_service__WEBPACK_IMPORTED_MODULE_7__["AdMobService"] },
        { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_ad_mob_service__WEBPACK_IMPORTED_MODULE_7__["AdMobService"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map