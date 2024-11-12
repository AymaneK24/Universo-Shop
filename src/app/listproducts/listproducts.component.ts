import { Component, OnInit } from '@angular/core';
import { ProductitemComponent } from '../productitem/productitem.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../Sevices/product.service';
import { SearchService } from '../Sevices/search.service';
import { Product } from '../Modules/Product';
import { combineLatest } from 'rxjs';
import { FooterComponent } from "../footer/footer.component";
import {  Router } from '@angular/router';

@Component({
  selector: 'app-listproducts',
  standalone: true,
  imports: [ProductitemComponent, CommonModule, FooterComponent],
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  filtredproducts: Product[] = [];

  constructor(
    private productsService: ProductService,
    private searchService: SearchService,
    private route : Router
  ) {}

  ngOnInit() {
    // Listen to changes in both search term and category
    combineLatest([
      this.searchService.searchTerm$,    // Observable for search term
      this.searchService.category$       // Observable for category
    ]).subscribe(([term, category]) => {
      if (term || category) {
        // Fetch products based on either search term or category
        this.searchService.searchProducts(term, category).subscribe((results: any) => {
          this.filtredproducts = results.products; // Update filtered products
        });
      } else {
        // If no term or category is selected, fetch all products
        this.productsService.getProducts().subscribe((data: any) => {
          this.filtredproducts = data.products;
        });
      }
    });
  }



    


}
