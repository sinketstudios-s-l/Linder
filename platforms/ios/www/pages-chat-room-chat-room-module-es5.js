(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-room-chat-room-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chat-room/chat-room.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chat-room/chat-room.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>chatRoom</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function() { return ChatRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-room.page */ "./src/app/pages/chat-room/chat-room.page.ts");







var routes = [
    {
        path: '',
        component: _chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]
    }
];
var ChatRoomPageModule = /** @class */ (function () {
    function ChatRoomPageModule() {
    }
    ChatRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]]
        })
    ], ChatRoomPageModule);
    return ChatRoomPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.page.ts ***!
  \***************************************************/
/*! exports provided: ChatRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPage", function() { return ChatRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage() {
    }
    ChatRoomPage.prototype.ngOnInit = function () {
    };
    ChatRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! raw-loader!./chat-room.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chat-room/chat-room.page.html"),
            styles: [__webpack_require__(/*! ./chat-room.page.scss */ "./src/app/pages/chat-room/chat-room.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatRoomPage);
    return ChatRoomPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-room-chat-room-module-es5.js.map