import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { User } from 'firebase';
import { RegisterData } from './register-data.model';

@Injectable()
export class AuthService {

  authStateChange = new Subject<User>();
  user: User;

  constructor(private fireAuth: AngularFireAuth) {}

  initAuthListener() {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        this.authStateChange.next(user);
      } else {
        this.user = null;
        this.authStateChange.next(null);
      }
    });
  }

  register(registerData: RegisterData) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(
      registerData.email,
      registerData.password
    );
  }

  login(authData: AuthData): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    );
  }

  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  isAuth(): boolean {
    return !!this.user;
  }
}

