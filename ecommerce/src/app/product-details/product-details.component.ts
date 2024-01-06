import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  pincode = new FormGroup({
    Pincode: new FormControl('', Validators.required),


  })
  error = false

  constructor(private routers: ActivatedRoute, private product: ProductService, private router: Router) { }

  products: any
  r: any
  yes=false;
  no=false;
  days:any;

  // Product corresponding to the id
  ngOnInit(): void {
    if(localStorage.getItem("logged")=="false"){
      this.router.navigate(['/login']);
    }
    console.warn(this.routers.snapshot.params['id'])
    this.product.getID(this.routers.snapshot.params['id']).
      subscribe((result) => {

        this.products = result
       

      }
      )
  }

  back() {

    this.router.navigate(['']);
  }

  
}
