import { Injectable } from '@angular/core';
import { Product } from '../Modules/Product';
import { BehaviorSubject } from 'rxjs';
import { Panieritem } from '../Modules/PanierItem';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private productCartSubject = new BehaviorSubject<Panieritem[]>([]);

  constructor() { }

  addProductToCart(product: Product): void {
    const currentCart = this.productCartSubject.getValue();
    const foundProduct = currentCart.find(item => item.produit.id === product.id);
 
    if (foundProduct) {
      foundProduct.qte++; 
    } else {
      currentCart.push(new Panieritem(product, 1)); 
    }
 
    this.productCartSubject.next(currentCart); 
    console.log('Product added to cart:', currentCart);
  }
 
  
  getAllCartProducts() {
   const currentCart = this.productCartSubject.asObservable();
   return currentCart;
  }
 
  increaseQte(produit:Product){
   const currentCart = this.productCartSubject.getValue();
   const foundProduct = currentCart.find(item => item.produit.id === produit.id);
   if(foundProduct){
     foundProduct.qte++;
   }
   this.productCartSubject.next(currentCart);
  }
 
  decreaseQte(produit:Product){
   const currentCart = this.productCartSubject.getValue();
   const foundProduct = currentCart.find(item => item.produit.id === produit.id);
   if(foundProduct){
     if(foundProduct.qte === 1){
       this.removeProductFromCart(produit);
     }
     else{
       foundProduct.qte--;
       this.productCartSubject.next(currentCart);
     }
   }
  }
  
  removeProductFromCart(produit:Product){
   let currentCart = this.productCartSubject.getValue();
   currentCart = currentCart.filter(item => item.produit.id !== produit.id);
   this.productCartSubject.next(currentCart);
  }

  removeAllProducts() {
    let currentCart = this.productCartSubject.getValue();
    
    currentCart.forEach(item => {
      this.removeProductFromCart(item.produit);
    });
  
    // Optionally, you could also clear the cart entirely at once, like so:
    // this.productCartSubject.next([]); // Clears the cart
  }
  
 

  
 
}
