import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

interface Review {
  rating: string;
  heading: string;
  review: string;
}

@Component({
  selector: 'app-askreview',
  templateUrl: './askreview.component.html',
  styleUrls: ['./askreview.component.sass']
})
export class AskreviewComponent implements OnInit {

  productCode: string;
  productName: string;
  brand: string;
  reviews: Review[] = [];
  rating: string;
  heading: string;
  review: string;

  submitted: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient,private product: ProductService) {
    this.productCode = ''; // Initialize productCode with an empty string
    this.productName = '';
    this.brand = '';
    this.rating = '';
    this.heading='';
    this.review='';

  }


  submitReview() {
    if (this.productCode && this.productName && this.brand) {
      console.log("check");
      // Check if the product code already exists
      this.product.getReview(this.productCode).subscribe(
        (response: any) => {
          const existingProduct = response.exists;
  
          if (existingProduct) {
            this.errorMessage = 'Product already exists. Redirecting to the review page in 30 seconds.';
            setTimeout(() => {
              this.errorMessage = '';
              // Code to redirect to the product review page
            }, 30000);
          } else {
            // Create a new review object
            const newReview: Review = {
              rating: this.rating,
              heading: this.heading,
              review: this.review
            };
  
            // Submit the review
            this.product.submitReview(newReview).subscribe(
              (result: any) => {
                // Handle the response or perform any necessary actions
                console.log('Review submitted successfully');
                console.log(newReview);
                this.submitted = true;
                // Reset form fields
                this.productCode = '';
                this.productName = '';
                this.brand = '';
              },
              (error) => {
                // Handle error
                console.error(error);
              }
            );
          }
        },
        (error) => {
          // Handle error
          console.error(error);
        }
      );
    }
  }
  

  
  



  ngOnInit(): void {
  }


  fetchReviews() {
    if (this.productCode) {
      console.log("check2");
      // Make an API call to fetch reviews for the product
      this.product.viewReview(this.productCode).subscribe(
        (result: any) => {
          this.reviews = result.reviews;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
} 

