import {inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword, user, signOut } from '@angular/fire/auth';


import { Observable,from, map } from 'rxjs';
import { User } from './Modules/User';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  firebaseauth = inject(Auth);
  user$ = user(this.firebaseauth);

  currentUserSig = signal<User | null | undefined>(undefined);

  async getUserId(): Promise<string | null> {
    const user = await this.firebaseauth.currentUser; // Wait for the current user
    return user ? user.uid : null; // Return the UID if the user exists, otherwise null
  }
  

  register(email : string, username : string , password : string) :Observable<void>{
    const promis = createUserWithEmailAndPassword(
      this.firebaseauth,
      email,
      password
    ).then(response => updateProfile(response.user,{displayName : username}))

    return from(promis);

  }

  login(email : string, password : string  ) : Observable <void> {
    const promis = signInWithEmailAndPassword(this.firebaseauth,
       email,
        password).then(()=>{});
    return from(promis);
  }
  

  logout():Observable<void>{
    const promise = signOut(this.firebaseauth);
    return from(promise);


  }










}
