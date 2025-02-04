import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  id: number,
  slug:string,
  name:string,
  image:{
    mobile:string,
    tablet:string,
    desktop:string,
  },
  category:string,
  categoryImage:{
    mobile:string,
    tablet:string,
    desktop:string,
  },
  new:boolean,
  price:number,
  description:string,
  features:string,
  includes:{quantity:number,item:string}[]
  gallery:{
    first:{mobile:string,
      tablet:string,
      desktop:string,},
    second:{mobile:string,
      tablet:string,
      desktop:string,},
    third:{mobile:string,
      tablet:string,
      desktop:string,}
  },
  others:{slug:string,
    name:string,
    image:{
      mobile:string,
      tablet:string,
      desktop:string}
    }[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl = 'data.json';  // Path to your data.json file

  constructor(private http: HttpClient) {

   }

  // Fetch all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }
}
