import { Order } from './../Modules/Order';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Panieritem } from '../Modules/PanierItem';
import { PanierService } from '../Sevices/panier.service';
import { Product } from '../Modules/Product';
import { NgFor, NgIf} from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { OrdersService } from '../Sevices/orders.service';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, FooterComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {


  productCart: Panieritem[] = [];

  constructor(private panier : PanierService,private route : Router,private orderservice : OrdersService){}

  ngOnInit(): void {

    this.panier.getAllCartProducts().subscribe(data => {
      this.productCart = data; 
    });
  }

  increaseQte(produit:Product){
    this.panier.increaseQte(produit);
  }
  decreaseQte(produit:Product){
    this.panier.decreaseQte(produit);
  }
  
  deleteProduct(produit:Product){
    this.panier.removeProductFromCart(produit);
  }
  calculateTotal(): number {
    return this.productCart.reduce(
      (total, item) => total + item.qte * item.produit.price,
      0
    );
  }

  
 cancel() {
  this.productCart = [];
  }


  Acheter() {

    this.orderservice.addOrderToOrders(this.productCart);
    this.productCart = [];
    this.panier.removeAllProducts();
    alert("Go to my orders to see your order")

  }


  continueShopping() {
  this.route.navigate(['/products'])
  }

}

