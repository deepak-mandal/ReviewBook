import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private http: HttpClient) { }

  ngOnInit(){}

  // products : Product[] = [
  //     {
  //       name:"Bag",
  //       desc:"Example Description",
  //       category: "Luggage",
  //       averageRating: 4.1,
  //       imageBytes: '/assets/bag.jpg',
  //       specs: undefined,
  //     },
  //     {
  //       name:"Bottle",
  //       desc:"Example Description",
  //       category: "Kitchen",
  //       averageRating: 3.2,
  //       imageBytes: '/assets/bottle.jpg',
  //       specs: undefined,
  //     },
  //     {
  //       name:"Camera",
  //       desc:"Example Description",
  //       category: "Electronics",
  //       averageRating: 4.4,
  //       imageBytes: '/assets/camera.jpg',
  //       specs: undefined,
  //     },
  //     {
  //       name:"Clock",
  //       desc:"Example Description",
  //       category: "Home Decor",
  //       averageRating: 3.6,
  //       imageBytes: '/assets/clock.jpg',
  //       specs: undefined,
  //     },
  //     {
  //       name:"Headphone",
  //       desc:"Example Description",
  //       category: "Electronics",
  //       averageRating: 3.8,
  //       imageBytes: '/assets/headphone1.jpg',
  //       specs: undefined,
  //     },
  //     {
  //       name:"Shoes",
  //       desc:"Example Description",
  //       category: "Fashion",
  //       averageRating: 4.6,
  //       imageBytes: '/assets/shoes.jpg',
  //       specs: undefined,
  //     },
  //     {
  //       name:"Watch",
  //       desc:"Example Description",
  //       category: "Fashion",
  //       averageRating: 4.3,
  //       imageBytes: '/assets/watch.jpg',
  //       specs: undefined,
  //     },
  //     {
  //       name:"Xbox Controller",
  //       desc:"Example Description",
  //       category: "Electronics",
  //       averageRating: 4.7,
  //       imageBytes: '/assets/xbox.jpg',
  //       specs: undefined,
  //     }
  // ];


  getSearchResults(query: string, category: string) {
    console.log("Received search query " + query);
    // return of(this.products);
    // return of(this.internalSearch(query));
    return this.backendSearch(query, category);
  }

  // internalSearch(query: string){
  //   let results: Product[] = [];
  //   for(let p of this.products){
  //     if(p.name.toLocaleLowerCase().includes(query)){
  //       results.push(p);
  //     }
  //   }
  //   return results;
  // }

  backendSearch(query: string, category: string){
    return this.http.post<Product[]>("http://localhost:8081/search", {"query": query, "category": category});
  }
}