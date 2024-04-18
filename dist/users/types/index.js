"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpResponse = exports.LoginCheckUserResponse = exports.LogoutUserResponse = exports.LoginUserResponse = exports.LoginUserRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginUserRequest {
}
exports.LoginUserRequest = LoginUserRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alan' }),
    __metadata("design:type", String)
], LoginUserRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alan123' }),
    __metadata("design:type", String)
], LoginUserRequest.prototype, "password", void 0);
class LoginUserResponse {
}
exports.LoginUserResponse = LoginUserResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: { user: {
                userId: 1,
                username: 'Alan',
                password: 'Alan123'
            } } }),
    __metadata("design:type", Object)
], LoginUserResponse.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Logged in' }),
    __metadata("design:type", String)
], LoginUserResponse.prototype, "msg", void 0);
class LogoutUserResponse {
}
exports.LogoutUserResponse = LogoutUserResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'session has anded' }),
    __metadata("design:type", String)
], LogoutUserResponse.prototype, "msg", void 0);
class LoginCheckUserResponse {
}
exports.LoginCheckUserResponse = LoginCheckUserResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", Number)
], LoginCheckUserResponse.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alan' }),
    __metadata("design:type", String)
], LoginCheckUserResponse.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alan@gmail.com' }),
    __metadata("design:type", String)
], LoginCheckUserResponse.prototype, "email", void 0);
class SignUpResponse {
}
exports.SignUpResponse = SignUpResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", Number)
], SignUpResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sasha_Golovin' }),
    __metadata("design:type", String)
], SignUpResponse.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '$2b$10$EO68VHHk58PYHTrA54gYW.tNsrvZzmp3r40OB57qFcHOI2pidMbYG' }),
    __metadata("design:type", String)
], SignUpResponse.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Golovin@gmail.com' }),
    __metadata("design:type", String)
], SignUpResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-02-15T18:48:54.504Z' }),
    __metadata("design:type", String)
], SignUpResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-02-15T18:48:54.504Z' }),
    __metadata("design:type", String)
], SignUpResponse.prototype, "createdAt", void 0);
//# sourceMappingURL=index.js.map