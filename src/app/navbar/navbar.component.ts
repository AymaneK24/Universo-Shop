import {  NgFor, NgIf } from '@angular/common';
import { Component, OnInit,inject } from '@angular/core';
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

constructor(private productService : ProductService, private searchService : SearchService, private router :Router){

 } 
authService = inject(AuthService);

  ngOnInit(): void {

    this.productService.getCategoriesOfProducts().subscribe((res : any) => {
      this.categories=res;
     })

    this.authService.user$.subscribe( (user : any) => {
      if(user){
        
    
        this.authService.currentUserSig.set({
          email : user.email!,
          username : user.displayName!
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
     }
    )

    
    
    
    }


  onSearch(term: string) {
    this.searchService.setCategory('');
    this.searchService.setSearchTerm(term); 
    this.router.navigate(['/products']); // Set the search term in the service
  }
  
  onCategoryChange() {
    this.searchService.setCategory(this.selectedCategory); 
    this.router.navigate(['/products']); // Set the selected category in the service
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');

  }

  login() {
    this.router.navigateByUrl('signin');
    }
    


  


    
  



}
