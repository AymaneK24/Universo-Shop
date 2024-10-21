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

  orders : Order[] = [];

  constructor(private order : OrdersService,private route : Router){}

  ngOnInit(): void {
      this.order.getAllOrders().subscribe(data => {
        this.orders = data;

      })
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
