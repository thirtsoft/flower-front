import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryShippingComponent } from './category-shipping/category-shipping.component';



@NgModule({
  declarations: [
    FooterComponent,
    FooterBottomComponent,
    HeaderBottomComponent,
    HeaderComponent,
    SearchComponent,
    TopBarComponent,
    NavbarComponent,
    CategoryShippingComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    /*
    FormsModule,
    ReactiveFormsModule,*/
    TranslateModule.forRoot()
  ],
  exports: [
  //  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    FooterComponent,
    FooterBottomComponent,
    HeaderBottomComponent,
    HeaderComponent,
    SearchComponent,
    TopBarComponent,
    NavbarComponent,
    CategoryShippingComponent
  ]

})
export class SharedModule { }
