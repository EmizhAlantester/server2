export declare class LoginUserRequest {
    username: string;
    password: string;
}
export declare class LoginUserResponse {
    user: {
        userId: number;
        username: string;
        password: string;
    };
    msg: string;
}
export declare class LogoutUserResponse {
    msg: string;
}
export declare class LoginCheckUserResponse {
    userId: number;
    username: string;
    email: string;
}
export declare class SignUpResponse {
    id: number;
    username: string;
    password: string;
    email: string;
    updatedAt: string;
    createdAt: string;
}
