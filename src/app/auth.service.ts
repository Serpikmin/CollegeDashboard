import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  username: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): string {
    let user = null;
    let path = '';
    if (username == "student@school" && password == "studentpass") {
      user = {
        username: username,
        roles: ['student'],
      };
      path = 'student';
    }

    else if (username == "professor@school" && password == "profpass") {
      user = {
        username: username,
        roles: ['professor'],
      };
      path = 'professor';
    }


    else if (username == "admin@school" && password == "adminpass") {
      user = {
        username: username,
        roles: ['admin'],
      };
      path = 'admin';
    }

    this.currentUserSubject.next(user);
    return path;
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public isAuthorized(allowedRoles: string[]): boolean {
    const user = this.currentUserValue;
    if (!user) return false;
    return user.roles.some(role => allowedRoles.includes(role));
  }
}