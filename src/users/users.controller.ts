import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {FirebaseAuthGuard} from "../auth/firebase/firebase.guard";
import {UsersService} from "./users.service";

@Controller()
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @UseGuards(FirebaseAuthGuard)
    @Get('api/me')
    async getProfile (@Request() req) {
        const user = await this.userService.getUserDetail(req.user.uid);
        return { ...user, email: req.user.email}
    }
}
