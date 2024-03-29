import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HomepageComponent} from './homepage/homepage.component';
import { AskreviewComponent } from './askreview/askreview.component';


const routes: Routes = [

  {
    component:LoginComponent,
    path:'login'
  },

  {
    component:RegistrationComponent,
    path:'registration'
  },

  {
    component:ProductDetailsComponent,
    path:'productDetails/:id'
  },

  {
    component:HomepageComponent,
    path:''
  },

  {
    component:AskreviewComponent,
    path:'review'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
