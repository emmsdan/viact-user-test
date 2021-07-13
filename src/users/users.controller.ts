import {
    BadRequestException,
    Controller,
    Get,
    Post,
    Put,
    Request,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {FirebaseAuthGuard} from "../auth/firebase/firebase.guard";
import {UsersService} from "./users.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {fileFilter, storage} from "../shared/utils.js";

@Controller()
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @UseGuards(FirebaseAuthGuard)
    @Get('api/me')
    async getProfile (@Request() req) {
        const user = await this.userService.getUserDetail(req.user.uid);
        return { ...user, email: req.user.email}
    }

    @UseGuards(FirebaseAuthGuard)
    @Put('api/upload')
    @UseInterceptors(FileInterceptor('file', { storage, fileFilter }))
    async uploadPhoto(@UploadedFile() file: Express.Multer.File, @Request() req){
        if (!file) {
            throw new BadRequestException('Only PNG and JPEG files are allow');
        }
        return this.userService.updateUser({ uid: req.user.uid, photoUrl: file.filename, })
    }
}
