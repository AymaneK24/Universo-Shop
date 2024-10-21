import { Injectable } from '@angular/core';
import { Order } from '../Modules/Order';
import { BehaviorSubject } from 'rxjs';

import { Panieritem } from '../Modules/PanierItem';
import { PanierService } from './panier.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orderSubject = new BehaviorSubject<Order[]>([]);

  constructor(private panier : PanierService) { }
  

  allOrders : Order[] = [];

  cart : Panieritem[] = [];



  addOrderToOrders(cart : Panieritem[]): void {
    const currentOreders = this.orderSubject.getValue();
    this.getCurrentCart();
    currentOreders.push(new Order(cart));
    this.orderSubject.next(currentOreders);

  }

  getCurrentCart(){

    this.panier.getAllCartProducts().subscribe(data => {
      this.cart = data; 
    });
  }




  
  getAllOrders() {
    const currentOrders = this.orderSubject.asObservable();
    return currentOrders;
   }

}
