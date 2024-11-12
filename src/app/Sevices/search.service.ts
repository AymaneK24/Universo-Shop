import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, debounceTime, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTermSubject = new BehaviorSubject<string>('');  // Search term
  searchTerm$ = this.searchTermSubject.asObservable();

  private categorySubject = new BehaviorSubject<string>('');    // Selected category
  category$ = this.categorySubject.asObservable();
  

  constructor(private http: HttpClient) {
    // Automatically fetch results when search term or category changes
    combineLatest([this.searchTerm$, this.category$]).pipe(
      debounceTime(400),  // Debounce to limit API calls
      switchMap(([term, category]) => this.searchProducts(term, category)) // Trigger search when term or category changes
    ).subscribe(results => {
      // Do something with the search results, if needed
      console.log('Search results:', results);
    });
  }

  // Set the search term
  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }

  // Set the selected category
  setCategory(category: string) {
    this.categorySubject.next(category);
  }

  // Perform the search, supporting both keyword and category
  searchProducts(term: string, category: string): Observable<any[]> {
    let url = `https://dummyjson.com/products/search?q=${term}`;
    
    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    return this.http.get<any[]>(url);
  }
}
