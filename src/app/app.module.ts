import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CustomerModule } from './customer/customer.module';
//import { ElementsModule } from './elements/elements.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
//import { PagesModule } from './pages/pages.module';
//import { ShopModule } from './shop/shop.module';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    /*
    FormsModule, 
    ReactiveFormsModule,
    CustomerModule,
    ShopModule,
    ElementsModule,
    PagesModule,
    */
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
