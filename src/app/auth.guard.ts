import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const ro = inject(Router);
  if(authService.isAuth==false){
    ro.navigate(['/signin']);
    
    return false;
  }
  else{
    return authService.isAuth;
  }
   // Allow route access only if authenticated
};
