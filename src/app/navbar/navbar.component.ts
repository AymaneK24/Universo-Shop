import {  NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Sevices/product.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../Sevices/search.service';
import { Router , RouterModule} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

selectedCategory : string = '';
searchKey : string = '';

categories :String[] = [];

connexionbutton = false ;
email = '';
password = '';



constructor(private productService : ProductService,
            private searchService : SearchService,
            private router :Router,
            private auth : AuthService
){ } 


 

  ngOnInit(): void {

    this.productService.getCategoriesOfProducts().subscribe((res : any) => {
      this.categories=res;
      this.connexionbutton = true;
      
    }
    
  )}


  onSearch(term: string) {
    this.searchService.setCategory('');
    this.searchService.setSearchTerm(term); 
    this.router.navigate(['/products']); // Set the search term in the service
  }
  
  onCategoryChange() {
    this.searchService.setCategory(this.selectedCategory); 
    this.router.navigate(['/products']); // Set the selected category in the service
  }

  Connexion() {
    const em = this.auth.email;
    const pas = this.auth.password;

    if (this.email && this.password) {
      if (this.email === em && this.password === pas) {
        this.auth.setToConnected();
        this.connexionbutton = true; // Set to true after successful login
        this.router.navigate(['/home']);
      } else {
        console.log('Invalid credentials');
      }
    } else {
      console.log('Please enter email and password');
    }
  }

  deconnexion() {
    this.auth.setToDeconnected();
    this.connexionbutton = false; // Set to false after logout
   
  }


    
  



}
