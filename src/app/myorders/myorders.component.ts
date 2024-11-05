import { Component, OnInit } from '@angular/core';
import { Order } from '../Modules/Order';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { OrdersService } from '../Sevices/orders.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-myorders',
  standalone: true,
  imports: [NgFor, FooterComponent],
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})
export class MyordersComponent implements OnInit{

  userOrders : any[] = [];

  constructor(private orderService : OrdersService,private route : Router){}

  ngOnInit(): void {
    this.orderService.getAllOrdersByUserId().subscribe((data: any) => {
      // Map over the data to convert Timestamp to Date
      this.userOrders = data.map((order : any) => ({
        ...order,
        dateCommande: order.dateCommande ? order.dateCommande.toDate() : null
      }));
      console.log("orders:", this.userOrders);
    });
  }
  


  calculateTotal(order : Order): number {
    return order.productCart.reduce(
      (total, item) => total + item.qte * item.produit.price, 0
    );
  }

  continueShopping() {
    this.route.navigate(['/products'])
    }


    









}
