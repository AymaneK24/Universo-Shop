import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { title } from 'process';
import { SearchService } from '../Sevices/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgFor, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route : Router, private searchservice : SearchService){}

images = [
  
  { title: 'sports-accessories', src: 'basket.jpg', alt: 'Sports Products' },
  { title: 'beauty', src: 'beauty.jpg', alt: 'Beauty' },
  { title: 'furniture', src: 'frach.jpg', alt: 'Furniture' },
  { title: 'tablets', src: 'tablet.jpg', alt: 'Tablets' },
  { title: 'Laptops', src: 'pc.jpg', alt: 'Laptops' },
  { title: 'Clothing', src: 'clothes.jpg', alt: 'Clothing' },
  { title: 'vehicle', src: 'car.jpg', alt: 'Cars' },
  { title: 'motorcycle', src: 'motor.jpg', alt: 'motor' },
  { title: 'Fragnances', src: 'fragnances.jpg', alt: 'Rway7' },
  {title : 'groceries' , src:'groceries.jpg', alt: '**'},
  {title : 'home-decoration', src : 'home-decoration.jpg' , alt :'**' },
  {title : 'kitchen-accessories' , src : 'kitchen-accessories.jpg' , alt : '***'},
  {title : 'mens-shirts' , src : 'mens-shirts.jpg' , alt : '***'},
  {title : 'mens-shoes' , src : 'mens-shoes.jpg' , alt : '***'},
  {title : 'mens-watches' , src : 'mens-watches.jpg' , alt : '***'},
  {title : 'mobile-accessories' , src : 'mobile-accesoires.jpg' , alt : '***'},
  {title : 'skin-care' , src : 'skin-care.jpg' , alt : '***'},
  {title : 'smartphones' , src : 'smart.jpg' , alt : '***'},
  {title : 'mens-shirts' , src : 'mens-shirts.jpg' , alt : '***'},
  {title : 'sunglasses' , src : 'sunglace.jpg' , alt : '***'},
  {title : 'womens-watches' , src : 'womems-watches.jpg' , alt : '***'},
  {title : 'women-bags' , src : 'women-bags.jpg' , alt : '***'},
  {title : 'women-jewellery' , src : 'women-jewelries.jpg' , alt : '***'},
  {title : 'women-shoes' , src : 'women-shoes.jpg' , alt : '***'}

];

goTothisproducts(category : string) {
  this.searchservice.setCategory(category);
  this.goToProducts();

 
 
  }
   
  goToProducts() {
    this.route.navigate(['/products']);
  
  }

 

}
