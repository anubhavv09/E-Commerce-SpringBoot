import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, RouterModule, Routes } from '@angular/router';

import { Stats } from '../model/Stats';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  stats: Stats = {
    countPosts: 0,
    countComments: 0,
    countUsers: 0
  }

 userLoggedIn: boolean = false;
  Homepage = new FormGroup({
    search: new FormControl('', Validators.required),
    filter: new FormControl('name', Validators.required)

  })
  error = false

  user=false;


  get search()
  {
    return this.Homepage.get('search') 
  }



  constructor(private product: ProductService, private router: Router) { }

  products: any

  ngOnInit(): void {
    if(localStorage.getItem("logged")=="true"){
      this.user=true;
    }
    this.product.getProducts().subscribe((result) => {
      console.warn(result)
      this.products = result
      this.getStats()

      console.log(this.products)


    })
  }
  //count the users
  getStats() {
    this.product.getStatsFromRemote().subscribe((data) => {
      console.log(data);
      this.stats.countUsers = data.countUsers,
        this.stats.countComments = data.countComments,
        this.stats.countPosts = data.countPosts;
    }, (error) => {
      console.log(error);
    })
  }


  logout()
  {
    localStorage.setItem("logged","false")
    this.router.navigate(['/login']);
    this.userLoggedIn = true;
  }
  details(id: any) {
   
    this.router.navigate(['/productDetails/' + id]);
  }

  login() {
    
    this.router.navigate(['/login']);
    this.userLoggedIn = true;
    console.log(this.userLoggedIn);
  }

  review1()
  {
    this.router.navigate(['/review']);
  }

  Search() {
    console.log(this.Homepage.value)
    if (this.Homepage.value.filter == "name") {
      this.product.getName(this.Homepage.value.search).subscribe((result) => {
        console.warn(result)
        this.products = result
        console.log(this.products)

      })

    }

    if (this.Homepage.value.filter == "brand") {
      this.product.getBrand(this.Homepage.value.search).subscribe((result) => {
        console.warn(result)
        this.products = result
        console.log(this.products)

      })

    }

    if (this.Homepage.value.filter == "code") {
      this.product.getCode(this.Homepage.value.search).subscribe((result) => {
        console.warn(result)
        this.products = result
        console.log(this.products)

      })

    }

    if (this.Homepage.value.filter == "price") {
      this.product.getPrice(this.Homepage.value.search).subscribe((result) => {
        console.warn(result)
        this.products = result
        console.log(this.products)

      })

    }
  }
}
