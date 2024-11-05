import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.currentUserSig()==null){
    router.navigate(['/signin']);
    return false;
  }
  else{
   return true;
   
  }
 
};
