import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './body/detail-product/detail-product.component';
import { HomeComponent } from './body/home/home.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  { path: 'search/:keyword',
    component: HomeComponent
  },
  {
    path: 'product-detail/:reference',
    component: DetailProductComponent
  },
  /*
  {
    path: 'single',
    component: DetailProductComponent
  },*/

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
