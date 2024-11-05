import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [

    {path : '' ,component : HomeComponent},
    {path : 'products' , component : ListproductsComponent},
    {path : 'panier' , component : PanierComponent},
    {path : 'signup' , component : SignupComponent},
    {path : 'signin' , component : SigninComponent},
    {path : 'orders' , component : MyordersComponent, canActivate : [authGuard]},
    {path : 'product/:id' , component : ProductdetailsComponent},
    {path : '***'  , component : PagenotfoundComponent}
    
];
