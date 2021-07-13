import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {FirebaseService} from "./firebase/firebase.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private  readonly firebase: FirebaseService
  ) {}

  async validateUser({email, password}): Promise<any> {
      try {
          const auth = await this.firebase.app.auth();
          const userCredential = await auth.signInWithEmailAndPassword(email, password);
          if (!userCredential || !userCredential.user) {
            throw new UnauthorizedException();
          }
            return this.usersService.getUserDetail(auth)
      } catch (error) {
          throw  new BadRequestException(error.message)
      }
  }

  async login(user: any) {
    return user
  }

  async createAccount({email, name, password} : {  name: string, email: string, password: string  }) {

      try {
          const auth = await this.firebase.app.auth()
          const userCredential = await auth.createUserWithEmailAndPassword(email, password);
          if (!userCredential || !userCredential.user) {
              throw new UnauthorizedException();
          }
          await auth.currentUser.updateProfile({
              displayName: name,
          });
          return this.usersService.getUserDetail(auth)
      } catch (error) {
          throw  new BadRequestException(error.message)
      }
  }
}
