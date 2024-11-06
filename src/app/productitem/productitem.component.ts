import { Component, Input } from '@angular/core';
import { Product } from '../Modules/Product';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { PanierService } from '../Sevices/panier.service';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-productitem',
  standalone: true,
  imports: [NgIf,NgClass,NgFor],
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.css'
})
export class ProductitemComponent {

  @Input() product !: Product ;
  constructor(private panier : PanierService,private route : Router){}

  AddtoCart(){
      this.panier.addProductToCart(this.product);
  }

  
  goToProductDetails(productId : number){

    this.route.navigate(['/product',productId]);
    
  }




  
}
