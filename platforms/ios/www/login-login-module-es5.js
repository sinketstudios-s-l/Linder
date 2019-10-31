(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  \n\n  <ng-container>\n\n\n\n\n    <div class=\"formBuilder\" id=\"regContainer\">\n\n      {{token}}\n\n      <ion-slides #signupSlider [options]=\"slideOpts\">\n\n        <ion-slide>\n          <div class=\"headers\">\n            <span>¡Bienvenida <b>Linder</b>!</span><br>\n            <span>¿Cómo te llamas?</span>\n          </div>\n\n          <form [formGroup]=\"nameForm\" class=\"loginForm\">\n            <ion-item lines=\"none\">\n              <ion-input formControlName=\"name\" text-capitalize type=\"text\" placeholder=\"Nombre\">\n              </ion-input>\n            </ion-item>\n\n            <ion-button class=\"btn\" (click)=\"next()\" [disabled]=\"!nameForm.valid\">Siguiente</ion-button>\n\n          </form>\n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"headers\">\n            <span>Encantado <b style=\"text-transform: capitalize;\">{{nombre}}</b>,</span><br>\n            <span>¿Cuándo Naciste?</span>\n          </div>\n\n          <form [formGroup]=\"dateForm\" class=\"dateForm\">\n            <ion-item lines=\"none\">\n              <ion-datetime mode=\"ios\" color=\"dark\" formControlName=\"date\" value=\"1990\" [max]=\"dateLimit\"\n                displayFormat=\"DD / MMM / YYYY\"\n                monthShortNames=\"Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic\" class=\"bornDate\"\n                (ionChange)=\"dateAge()\">\n              </ion-datetime>\n            </ion-item>\n\n            <ion-button class=\"btn btnPrev\" (click)=\"prev()\">\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              Atrás\n            </ion-button>\n            <ion-button class=\"btn btnNext\" (click)=\"next()\" [disabled]=\"!dateForm.valid\">\n              Siguiente\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            </ion-button>\n\n          </form>\n\n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"headers\">\n            <span>Soy...</span><br>\n            <span></span>\n          </div>\n\n          <ion-button class=\"btn genderBtn\" (click)=\"gender($event)\" id=\"male\">\n            <ion-icon slot=\"start\" name=\"male\" class=\"mIcon\" mode=\"ios\" id=\"male\"></ion-icon>\n            Hombre\n          </ion-button>\n\n          <ion-button class=\"btn genderBtn\" (click)=\"gender($event)\" id=\"female\">\n            <ion-icon slot=\"start\" name=\"female\" class=\"fIcon\" mode=\"ios\" id=\"female\"></ion-icon>\n            Mujer\n          </ion-button>\n\n          <ion-button class=\"btn genderBtn\" (click)=\"gender($event)\" id=\"trans\">\n            <ion-icon slot=\"start\" name=\"transgender\" class=\"tIcon\" mode=\"md\" id=\"trans\"></ion-icon>\n            Otro\n          </ion-button>\n\n          <ion-button class=\"btn\" (click)=\"prev()\">\n            <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n            Atrás\n          </ion-button>\n\n\n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"headers\">\n            <span>Me interesan...</span><br>\n            <span></span>\n          </div>\n\n          <ion-button class=\"btn genderBtn\" (click)=\"interest($event)\" id=\"male\">\n            <ion-icon slot=\"start\" name=\"male\" class=\"mIcon\" mode=\"ios\" id=\"male\"></ion-icon>\n            Hombres\n          </ion-button>\n\n          <ion-button class=\"btn genderBtn\" (click)=\"interest($event)\" id=\"female\">\n            <ion-icon slot=\"start\" name=\"female\" class=\"fIcon\" mode=\"ios\" id=\"female\"></ion-icon>\n            Mujeres\n          </ion-button>\n\n          <ion-button class=\"btn genderBtn\" (click)=\"interest($event)\" id=\"both\">\n            <ion-icon slot=\"start\" name=\"transgender\" class=\"tIcon\" mode=\"md\" id=\"both\"></ion-icon>\n            Ambos\n          </ion-button>\n\n\n\n          <ion-button class=\"btn\" (click)=\"prev()\">\n            <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n            Atrás\n          </ion-button>\n\n\n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"headers\">\n            <span>Cuéntanos algo sobre ti:</span><br>\n            <span></span>\n          </div>\n          <form [formGroup]=\"aboutForm\">\n            <ion-textarea (ionChange)=\"wordsCount($event)\" formControlName=\"desc\" rows=\"6\" cols=\"20\" placeholder=\"Aficiones, gustos, detalles..\"></ion-textarea>\n            <ion-label>\n              <p style=\"color: #fff;opacity: .35;\">{{descL}}/250</p>\n            </ion-label>\n          </form>\n          <ion-button class=\"btn btnPrev\" (click)=\"prev()\">\n            <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n            Atrás\n          </ion-button>\n\n          <ion-button class=\"btn btnNext\" (click)=\"next()\" [disabled]=\"!aboutForm.valid\">\n            Siguiente\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n\n\n        </ion-slide>\n\n        <ion-slide>\n          <ion-spinner *ngIf=\"loading == 1\" name=\"crescent\"></ion-spinner>\n\n          <div class=\"headers\">\n            <span><b style=\"text-transform: capitalize;\">{{nombre}}</b>, ¡Ya casi estamos!</span><br>\n            <span>¿Cuál es tu Correo?</span>\n          </div>\n\n          <form [formGroup]=\"regForm\" class=\"loginForm\">\n            <ion-item lines=\"none\">\n              <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Correo Electrónico\">\n              </ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\" style=\"margin-top: 1rem\">\n              <ion-input formControlName=\"passwd\" type=\"password\" placeholder=\"Contraseña\">\n              </ion-input>\n            </ion-item>\n\n\n            <ion-button class=\"btn btnPrev\" (click)=\"prev()\">\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              Atrás\n            </ion-button>\n\n            <ion-button class=\"btn btnNext\" (click)=\"signup()\" [disabled]=\"!regForm.valid\">Finalizar</ion-button>\n          </form>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ng-container>\n\n\n  <ng-container *ngIf=\"loginF == 1\">\n\n    <div class=\"loginFormContent\">\n\n      <form [formGroup]=\"loginForm\" class=\"formContent\">\n\n        <ion-spinner *ngIf=\"loading == 1\" name=\"crescent\"></ion-spinner>\n\n        <div class=\"headers\">\n          <span>Entra en tu cuenta de <b>Swipe</b></span>\n        </div>\n\n        <ion-item lines=\"none\" style=\"margin-top: .5rem\">\n          <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Correo Electrónico\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"margin-top: 1rem\">\n          <ion-input formControlName=\"passwd\" type=\"password\" placeholder=\"Contraseña\">\n          </ion-input>\n        </ion-item>\n\n        <ion-button class=\"btn\" (click)=\"signin()\" [disabled]=\"!loginForm.valid\" (click)=\"signin()\">Iniciar Sesión\n        </ion-button>\n\n      </form>\n\n\n\n    </div>\n\n  </ng-container>\n\n  <div class=\"logFooter\">\n    <ion-label (click)=\"logForm()\" *ngIf=\"loginF != 1\">¿Ya tienes cuenta? <b class=\"logTxt\">Inicia Sesión.</b>\n    </ion-label>\n    <ion-label (click)=\"regisForm()\" *ngIf=\"loginF == 1\">¿Todavía no tienes cuenta? <b class=\"logTxt\">Regístrate.</b>\n    </ion-label>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-app {\n  --background: #ad5389;\n  /* fallback for old browsers */\n  --background: -webkit-linear-gradient(to top, #511670, #ad5389);\n  --background: linear-gradient(to top, #511670, #ad5389);\n  width: 100%;\n  height: 100vh;\n  --color: #fff;\n  --overflow: hidden;\n}\n\n.headers {\n  font-size: 25px;\n}\n\n.formBuilder {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  opacity: 1;\n  -webkit-animation-name: fadeInOpacity;\n          animation-name: fadeInOpacity;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n@-webkit-keyframes fadeInOpacity {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  100% {\n    top: 45%;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeInOpacity {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  100% {\n    top: 45%;\n    opacity: 1;\n  }\n}\n\nion-item {\n  --color: #fff;\n  --background: none;\n  text-align: center;\n  font-size: 25px;\n  width: 80%;\n  margin: 0 auto;\n}\n\nion-slider {\n  width: 100%;\n  height: 100%;\n}\n\nion-slide {\n  white-space: nowrap;\n  display: block;\n  height: auto;\n}\n\n.loginForm, .dateForm {\n  margin-top: 1rem;\n}\n\n.formBuilder {\n  padding: 20px;\n  text-align: center;\n}\n\n.btn:disabled {\n  --background: #f1f1f1;\n  --color: #801eb4;\n}\n\n.btn {\n  font-size: 15px;\n  --background: #fff;\n  --border-radius: 40px;\n  margin: 1rem auto;\n  line-height: 1rem;\n  --color: #801eb4;\n}\n\n.btnPrev {\n  margin-top: 2rem;\n  margin-right: 1rem;\n}\n\n.btnNext {\n  margin-top: 2rem;\n  margin-left: 1.5rem;\n}\n\n.bornDate {\n  margin: 0 auto;\n  --background: #801eb4;\n}\n\n.fIcon {\n  color: #da70d6;\n}\n\n.mIcon {\n  color: #0000ff;\n}\n\n.tIcon {\n  color: #a6ff00;\n}\n\n.genderBtn {\n  width: 70%;\n  display: block;\n}\n\n.logFooter {\n  position: absolute;\n  bottom: 1rem;\n  padding: 20px;\n  width: 100%;\n  text-align: center;\n}\n\n.logTxt {\n  color: orchid;\n}\n\n.loginFormContent {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  text-align: center;\n}\n\n.loginFormContent .formContent {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n  left: 0%;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.formContent {\n  -webkit-animation: appearLogin ease-in-out 2s;\n          animation: appearLogin ease-in-out 2s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes appearLogin {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(-1500px, 0px);\n            transform: translate(-1500px, 0px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate(30px, 0px);\n            transform: translate(30px, 0px);\n  }\n  80% {\n    -webkit-transform: translate(-10px, 0px);\n            transform: translate(-10px, 0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n\n@keyframes appearLogin {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(-1500px, 0px);\n            transform: translate(-1500px, 0px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate(30px, 0px);\n            transform: translate(30px, 0px);\n  }\n  80% {\n    -webkit-transform: translate(-10px, 0px);\n            transform: translate(-10px, 0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n\n.aboutMe {\n  height: auto;\n  max-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaW5rZXRTdHVkaW9zL0Rlc2t0b3AvTGluZGVyL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUF3Qiw4QkFBQTtFQUN4QiwrREFBQTtFQUNBLHVEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsVUFBQTtFQUNILHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNHLDhCQUFBO1VBQUEsc0JBQUE7QUNFSjs7QURFQTtFQUNDO0lBQ08sUUFBQTtJQUNOLFVBQUE7RUNDQTtFRENEO0lBQ08sUUFBQTtJQUNOLFVBQUE7RUNDQTtBQUNGOztBRFRBO0VBQ0M7SUFDTyxRQUFBO0lBQ04sVUFBQTtFQ0NBO0VEQ0Q7SUFDTyxRQUFBO0lBQ04sVUFBQTtFQ0NBO0FBQ0Y7O0FERUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNDSjs7QURHRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBDQUFBO1lBQUEsa0NBQUE7RUNBSjtFREVFO0lBQ0UsVUFBQTtJQUNBLHVDQUFBO1lBQUEsK0JBQUE7RUNBSjtFREVFO0lBQ0Usd0NBQUE7WUFBQSxnQ0FBQTtFQ0FKO0VERUU7SUFDRSxVQUFBO0lBQ0Esc0NBQUE7WUFBQSw4QkFBQTtFQ0FKO0FBQ0Y7O0FEZkU7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQ0FBQTtZQUFBLGtDQUFBO0VDQUo7RURFRTtJQUNFLFVBQUE7SUFDQSx1Q0FBQTtZQUFBLCtCQUFBO0VDQUo7RURFRTtJQUNFLHdDQUFBO1lBQUEsZ0NBQUE7RUNBSjtFREVFO0lBQ0UsVUFBQTtJQUNBLHNDQUFBO1lBQUEsOEJBQUE7RUNBSjtBQUNGOztBREtBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCwgaW9uLWFwcHtcbiAgICAtLWJhY2tncm91bmQ6ICNhZDUzODk7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1MTE2NzAsICNhZDUzODkpOyBcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1MTE2NzAsICNhZDUzODkpOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVhZGVyc3tcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5mb3JtQnVpbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBvcGFjaXR5OiAxO1xuXHRhbmltYXRpb24tbmFtZTogZmFkZUluT3BhY2l0eTtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbn1cblxuXG5Aa2V5ZnJhbWVzIGZhZGVJbk9wYWNpdHkge1xuXHQwJSB7XG4gICAgICAgIHRvcDogMjAlO1xuXHRcdG9wYWNpdHk6IDA7XG4gICAgfVxuXHQxMDAlIHtcbiAgICAgICAgdG9wOiA0NSU7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxufVxuXG5pb24taXRlbSB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24tc2xpZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmxvZ2luRm9ybSwgLmRhdGVGb3Jte1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5mb3JtQnVpbGRlcntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpkaXNhYmxlZHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgLS1jb2xvcjogIzgwMWViNDtcbn1cblxuLmJ0bntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAtLWNvbG9yOiAjODAxZWI0O1xufVxuXG4uYnRuUHJldntcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmJ0bk5leHR7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xufVxuXG4uYm9ybkRhdGV7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLS1iYWNrZ3JvdW5kOiAjODAxZWI0O1xufVxuXG4uZkljb257XG4gICAgY29sb3I6ICNkYTcwZDY7XG59XG4ubUljb257XG4gICAgY29sb3I6ICMwMDAwZmY7XG59XG5cbi50SWNvbntcbiAgICBjb2xvcjogI2E2ZmYwMDtcbn1cblxuLmdlbmRlckJ0bntcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nRm9vdGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dUeHR7XG4gICAgY29sb3I6IG9yY2hpZDtcbn1cblxuLmxvZ2luRm9ybUNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5Gb3JtQ29udGVudCAuZm9ybUNvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZvcm1Db250ZW50e1xuICAgIGFuaW1hdGlvbjogYXBwZWFyTG9naW4gZWFzZS1pbi1vdXQgMnM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gICAgXG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYXBwZWFyTG9naW57XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTowO1xuICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlKC0xNTAwcHgsMHB4KSAgO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgb3BhY2l0eToxO1xuICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlKDMwcHgsMHB4KSAgO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlKC0xMHB4LDBweCkgIDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OjE7XG4gICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGUoMHB4LDBweCkgIDtcbiAgICB9XG4gIH1cbiAgXG4gXG4gIFxuLmFib3V0TWV7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuIiwiaW9uLWNvbnRlbnQsIGlvbi1hcHAge1xuICAtLWJhY2tncm91bmQ6ICNhZDUzODk7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1MTE2NzAsICNhZDUzODkpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1MTE2NzAsICNhZDUzODkpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVhZGVycyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmZvcm1CdWlsZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbk9wYWNpdHk7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbk9wYWNpdHkge1xuICAwJSB7XG4gICAgdG9wOiAyMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDQ1JTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5pb24taXRlbSB7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24tc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmxvZ2luRm9ybSwgLmRhdGVGb3JtIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmZvcm1CdWlsZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuOmRpc2FibGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAtLWNvbG9yOiAjODAxZWI0O1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogNDBweDtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAtLWNvbG9yOiAjODAxZWI0O1xufVxuXG4uYnRuUHJldiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmJ0bk5leHQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xufVxuXG4uYm9ybkRhdGUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiAjODAxZWI0O1xufVxuXG4uZkljb24ge1xuICBjb2xvcjogI2RhNzBkNjtcbn1cblxuLm1JY29uIHtcbiAgY29sb3I6ICMwMDAwZmY7XG59XG5cbi50SWNvbiB7XG4gIGNvbG9yOiAjYTZmZjAwO1xufVxuXG4uZ2VuZGVyQnRuIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ1R4dCB7XG4gIGNvbG9yOiBvcmNoaWQ7XG59XG5cbi5sb2dpbkZvcm1Db250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5Gb3JtQ29udGVudCAuZm9ybUNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtQ29udGVudCB7XG4gIGFuaW1hdGlvbjogYXBwZWFyTG9naW4gZWFzZS1pbi1vdXQgMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhckxvZ2luIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MDBweCwgMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG59XG4uYWJvdXRNZSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ad_mob_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/ad-mob.service */ "./src/app/services/ad-mob.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");










var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, afAuth, afs, userSvc, alertCtrl, router, menuCtrl, adMobSvc, fcm) {
        this.formBuilder = formBuilder;
        this.afAuth = afAuth;
        this.afs = afs;
        this.userSvc = userSvc;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.adMobSvc = adMobSvc;
        this.fcm = fcm;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoHeight: true,
            allowTouchMove: false,
            speed: 800,
        };
        this.loginF = 0;
        this.loading = 0;
        this.descL = 0;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false, 'main');
        this.adMobSvc.hideAd();
        if (this.userSvc.isAuthenticated()) {
            this.router.navigate(['/home']);
        }
        this.getFCMToken();
        this.dateLimit = new Date().getFullYear() - 18;
        this.nameForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*')
            ]))
        });
        this.dateForm = this.formBuilder.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]))
        });
        this.regForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)
            ])),
            passwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)
            ]))
        });
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)
            ])),
            passwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)
            ]))
        });
        this.aboutForm = this.formBuilder.group({
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)
            ]))
        });
    };
    LoginPage.prototype.getFCMToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fcm.getToken().then(function (token) {
                            _this.token = token;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.next = function () {
        this.nombre = this.nameForm.get('name').value;
        this.signupSlider.slideNext();
    };
    LoginPage.prototype.prev = function () {
        this.signupSlider.slidePrev();
    };
    LoginPage.prototype.gender = function (g) {
        this.signupSlider.slideNext();
        this.gen = g.target.id;
    };
    LoginPage.prototype.interest = function (i) {
        this.signupSlider.slideNext();
        this.int = i.target.id;
    };
    LoginPage.prototype.role = function (r) {
        this.signupSlider.slideNext();
        this.rol = r.target.id;
    };
    LoginPage.prototype.dateAge = function () {
        var date = this.dateForm.get('date').value;
        console.log(new Date(date));
    };
    LoginPage.prototype.logForm = function () {
        this.loginF = 1;
        document.getElementById('regContainer').style.display = "none";
    };
    LoginPage.prototype.regisForm = function () {
        this.loginF = 0;
        document.getElementById('regContainer').style.display = "block";
    };
    LoginPage.prototype.wordsCount = function (event) {
        this.descL = event.detail.value.length;
    };
    LoginPage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: header,
                            message: message,
                            buttons: ['Cerrar']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var name, date, gen, int, email, passwd, desc, res, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = 1;
                        name = this.nameForm.get('name').value;
                        date = this.dateForm.get('date').value;
                        gen = this.gen;
                        int = this.int;
                        email = this.regForm.get('email').value;
                        passwd = this.regForm.get('passwd').value;
                        desc = this.aboutForm.get('desc').value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, passwd)];
                    case 2:
                        res = _a.sent();
                        this.afs.doc("users/" + res.user.uid).set({
                            name: name,
                            email: email,
                            verificated: false,
                            date: new Date(),
                            age: new Date(date),
                            gender: gen,
                            interest: int,
                            uid: res.user.uid,
                            role: this.rol,
                            diamonds: Number(300),
                            profilePic: "",
                            desc: desc,
                            token: this.token
                        }).then(function () {
                            _this.router.navigate(['/home']).then(function () { return window.location.reload(); }).finally(function () { return _this.loading = 0; });
                        }).catch(function (err) {
                            console.dir(err);
                            console.log(err);
                        });
                        this.userSvc.setUser({
                            email: email,
                            uid: res.user.uid
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.dir(err_1);
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var email, passwd, res, err_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = this.loginForm.get('email').value;
                        passwd = this.loginForm.get('passwd').value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.loading = 1;
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, passwd)];
                    case 2:
                        res = _a.sent();
                        if (res.user) {
                            this.userSvc.setUser({
                                email: email,
                                uid: res.user.uid
                            });
                            this.router.navigate(['/home']).then(function () { return window.location.reload(); }).finally(function () { return _this.loading = 0; });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        if (err_2.code == "auth/user-not-found") {
                            this.presentAlert('¡Oops! Algo ha salido mal', 'El Usuario con el correo: ' + email + ' no existe. Inténtalo de nuevo.');
                            console.log('user not found');
                        }
                        else if (err_2.code == "auth/wrong-password") {
                            this.presentAlert('¡Vaya! Algo ha salido mal', 'La contraseña no es correcta. Inténtalo de nuevo.');
                            console.log('wrong pass');
                        }
                        console.dir(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_ad_mob_service__WEBPACK_IMPORTED_MODULE_8__["AdMobService"] },
        { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signupSlider', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPage.prototype, "signupSlider", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_ad_mob_service__WEBPACK_IMPORTED_MODULE_8__["AdMobService"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map