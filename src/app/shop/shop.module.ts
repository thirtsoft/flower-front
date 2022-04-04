import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductBySubCategoryComponent } from './product-by-sub-category/product-by-sub-category.component';
import { SearchInShopComponent } from './search-in-shop/search-in-shop.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShopComponent } from './shop/shop.component';
import { SuccessOrderComponent } from './success-order/success-order.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    ProductBySubCategoryComponent,
    SearchInShopComponent,
    WishlistComponent,
    ShopComponent,
    SuccessOrderComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
