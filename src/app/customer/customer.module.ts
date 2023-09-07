import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination' ;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './body/home/home.component';
import { NewArriveProductComponent } from './body/new-arrive-product/new-arrive-product.component';
import { DetailProductComponent } from './body/detail-product/detail-product.component';
import { NavbarBodyComponent } from './body/navbar-body/navbar-body.component';
import { BrandComponent } from './body/brand/brand.component';
import { FeatureStartComponent } from './body/feature-start/feature-start.component';
import { CategoryBrandComponent } from './body/category-brand/category-brand.component';
import { CategoryStartComponent } from './body/category-start/category-start.component';
import { OfferStartComponent } from './body/offer-start/offer-start.component';
import { ProductStartComponent } from './body/product-start/product-start.component';
import { SubscribeNewletterComponent } from './body/subscribe-newletter/subscribe-newletter.component';
import { RatingComponent } from './body/rating/rating.component';
import { ListRatingComponent } from './body/rating/list-rating/list-rating.component';
import { SharedModule } from '../shared/shared.module';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { Top4ProductListComponent } from './body/top4-product-list/top4-product-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewArriveProductComponent,
    DetailProductComponent,
    NavbarBodyComponent,
    MainBodyComponent,
    BrandComponent,
    FeatureStartComponent,
    CategoryBrandComponent,
    CategoryStartComponent,
    OfferStartComponent,
    ProductStartComponent,
    SubscribeNewletterComponent,
    RatingComponent,
    ListRatingComponent,
    Top4ProductListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerModule { }
