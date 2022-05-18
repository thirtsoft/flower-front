import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { SuccessOrderComponent } from './success-order/success-order.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
  {
    path: 'category/:id',
    component: ShopComponent
  },
  {
    path: 'searchInshop/:keyword',
    component: ShopComponent
  },
  {
    path: 'searchbyPrice/:price',
    component: ShopComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'success-order',
    component: SuccessOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
