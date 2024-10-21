import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Sevices/product.service';
import { PanierService } from '../Sevices/panier.service';
import { Product } from '../Modules/Product';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [NgClass,NgIf,NgFor],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {



  product !: Product; // Use definite assignment assertion


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private panier: PanierService
  ) {}

  ngOnInit(): void {

    // Get the product ID from the route parameters and convert it to a number
    const productId = +this.route.snapshot.paramMap.get('id')!; // The exclamation mark is used to assert that the value is not null
    this.productService.getProductById(productId).subscribe((data:any) => {
      this.product =  data;

    }
    );

  }

  addToCart(): void {
    this.panier.addProductToCart(this.product);
  }



}
