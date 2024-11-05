import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http : HttpClient) { }
  private productsAPI = 'https://dummyjson.com/products';
  private categoriesAPI = 'https://dummyjson.com/products/category-list';
  
  

  searchResults$ !: Observable<any>; 

  getProducts(){
    return this.http.get(this.productsAPI);
  }
  
  getCategoriesOfProducts(){
    return this.http.get(this.categoriesAPI);
  
  }

  getProductById(id : number): Observable<any>{
    return this.http.get<any>(`https://dummyjson.com/products/${id}`)
  }


 
}
