import { PassportSerializer } from "@nestjs/passport";
export declare class SessionSerialiser extends PassportSerializer {
    serializeUser(user: any, done: (err: Error, user: any) => void): void;
    deserializeUser(payload: any, done: (err: Error, user: any) => void): void;
}
