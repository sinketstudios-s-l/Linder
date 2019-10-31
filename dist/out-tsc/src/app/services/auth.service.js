import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
let AuthService = class AuthService {
    constructor(user, route) {
        this.user = user;
        this.route = route;
    }
    canActivate(route) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (yield this.user.isAuthenticated()) {
                return true;
            }
            this.route.navigate(['/login']);
            return false;
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [UserService, Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map