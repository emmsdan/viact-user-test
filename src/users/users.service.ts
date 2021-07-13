import { Injectable } from '@nestjs/common';
import { firebaseAuthApp} from "../auth/firebase/config";
import {FirebaseService} from "../auth/firebase/firebase.service";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];
  private readonly database: any
  private  authInstance: any;
  constructor(private  readonly firebase: FirebaseService) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
    this.database = firebaseAuthApp.database();
  }

  async auth() {
    this.authInstance = await this.firebase.app.auth()
    return this.authInstance
  }

  async create(user) {
    await this.database.ref('users/' + user.id ).set(user)
    return await this.getCurrentUser();
  }

  async getCurrentUser() {
    const accessToken = await this.authInstance.currentUser.getIdToken()
    const {uid, displayName, email, emailVerified} = this.authInstance.currentUser
    const user = await this.getUserDetail(uid)
    return  {...user, uid, displayName, email, emailVerified, accessToken};
  }

  async getUserDetail(uid) {
    const user = await this.database.ref('users/' + uid).once("value");
    return user.val();
  }

  async updateUser(data) {
    const user = await this.database.ref('users/' + data.uid).update(data);
    return user;
  }
}
