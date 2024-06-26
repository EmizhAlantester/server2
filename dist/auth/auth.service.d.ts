import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    validateUser(username: string, password: string): Promise<{
        userId: any;
        username: string;
        email: string;
    }>;
}
