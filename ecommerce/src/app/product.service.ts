import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Stats } from './model/Stats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  url="http://localhost:9010/"

  constructor(private http:HttpClient) { }

  getlogin(email: any)
  {
    return this.http.get(this.url+"users/"+email);

  }

  postregister(data: any)
  {
    return this.http.post(this.url+"users",data);

  }

  getProducts()
  {
    return this.http.get(this.url+"products");

  }

  getCode(code: any)
  {
    return this.http.get(this.url+"products/code/"+code);
  }

  getPrice(price: any)
  {
    return this.http.get(this.url+"products/price/"+price);
  }

  getName(name: any)
  {
    return this.http.get(this.url+"products/name/"+name);
  }

  getBrand(brand: any)
  {
    return this.http.get(this.url+"products/brand/"+brand);
  }

  getID(id: any)
  {
    return this.http.get(this.url+"products/id/"+id);
  }

  getpincode(id: any,pincode: any)
  {
    return this.http.get(this.url+"serviceability/"+id+"/"+pincode);
  }
  
  public getStatsFromRemote(): Observable<Stats> {
    return this.http.get<Stats>(this.url + '/getstats');
  }

  getReview(productCode:any)
  {
    return this.http.get(this.url+"checkProductCode/"+productCode)

  }
  viewReview(productCode:any)
  {
    return this.http.get(this.url+"reviews/"+productCode)
  }

  submitReview(reviewData: any) {
    return this.http.post(this.url + 'submitReview', reviewData);
  }

  
}




