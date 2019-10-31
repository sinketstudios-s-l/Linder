(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chats-chats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chats/chats.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chats/chats.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" color=\"light\" mode=\"ios\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item detail class=\"chatItem\">\n    <ion-avatar slot=\"start\">\n      <img src=\"https://i.pinimg.com/originals/07/a2/f9/07a2f9ad7d550d6f0224ad0abc025602.jpg\" alt=\"\">\n    </ion-avatar>\n    <ion-label slot=\"start\">\n      <h2>Nombre</h2>\n      <label>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>\n    </ion-label>\n    <ion-label slot=\"end\">\n      <p>Ayer</p>\n    </ion-label>\n    <ion-badge slot=\"end\">22</ion-badge>\n  </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/chats/chats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.module.ts ***!
  \*********************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats.page */ "./src/app/pages/chats/chats.page.ts");







const routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]
    }
];
let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
    })
], ChatsPageModule);



/***/ }),

/***/ "./src/app/pages/chats/chats.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #ad5389;\n  --background: -webkit-linear-gradient(to top, #511670, #ad5389);\n  --background: linear-gradient(to top, #511670, #ad5389);\n  --color: #fff;\n}\n\nion-header ion-toolbar {\n  --background: #ad5389;\n  --color: #fff;\n}\n\n.chatItem h2 {\n  font-weight: 525;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaW5rZXRTdHVkaW9zL0Rlc2t0b3AvTGluZGVyL3NyYy9hcHAvcGFnZXMvY2hhdHMvY2hhdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGF0cy9jaGF0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLCtEQUFBO0VBQ0EsdURBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURJQTtFQUNJLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0cy9jaGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNhZDUzODk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1MTE2NzAsICNhZDUzODkpOyBcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1MTE2NzAsICNhZDUzODkpOyBcbiAgICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogI2FkNTM4OTtcbiAgICAtLWNvbG9yOiAjZmZmO1xufVxuXG4uY2hhdEl0ZW0ge31cblxuLmNoYXRJdGVtIGgye1xuICAgIGZvbnQtd2VpZ2h0OiA1MjU7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNhZDUzODk7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNTExNjcwLCAjYWQ1Mzg5KTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNTExNjcwLCAjYWQ1Mzg5KTtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2FkNTM4OTtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLmNoYXRJdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDUyNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/chats/chats.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chats/chats.page.ts ***!
  \*******************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatsPage = class ChatsPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chats',
        template: __webpack_require__(/*! raw-loader!./chats.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chats/chats.page.html"),
        styles: [__webpack_require__(/*! ./chats.page.scss */ "./src/app/pages/chats/chats.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatsPage);



/***/ })

}]);
//# sourceMappingURL=pages-chats-chats-module-es2015.js.map