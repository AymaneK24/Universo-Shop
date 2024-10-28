
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
    constructor(private router : Router, private authService : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const isAuthentificated = this.authService.isAuth;
       if(isAuthentificated){
       // const authReq = req.clone((
          //  headers : req.headers.set('Authorization','Bearer'+this.authService.getToken())
       // )

     //   );
       // return next.handle(authReq)
       }
       return next.handle(req)

    }
 

}