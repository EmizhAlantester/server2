import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { LoginCheckUserResponse, LoginUserRequest, LoginUserResponse, LogoutUserResponse, SignUpResponse } from './types';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOkResponse({ type: SignUpResponse })
    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
 
    @ApiBody({ type: LoginUserRequest })
    @ApiOkResponse({ type: LoginUserResponse })
    @Post('/login')
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Header('Content-Type', 'application/json')
    login(@Request() req) {
        return { user: req.user, msg: 'Logged in' };
    }

    @ApiOkResponse({ type: LoginCheckUserResponse })
    @Get('/login-check')
    @UseGuards(AuthenticatedGuard)
    loginCheck(@Request() req) {
        return req.user;
    }

    @ApiOkResponse({ type: LogoutUserResponse })
    @Get('/logout')
    logout(@Request() req) {
        req.session.destroy();
        return { msg: 'session has ended' };
    }
}
    


