import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//import { RouterModule } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TranslateModule } from '@ngx-translate/core';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SidebarCategoryComponent } from './sidebar-category/sidebar-category.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top/top-bar/top-bar.component';
import { NavBarComponent } from './top/nav-bar/nav-bar.component';
import { MainTopComponent } from './top/main-top/main-top.component';
import { BottonBarComponent } from './top/botton-bar/botton-bar.component';
import { MainFooterComponent } from './bottom/main-footer/main-footer.component';
import { FooterBottomComponent } from './bottom/footer-bottom/footer-bottom.component';
import { FooterComponent } from './bottom/footer/footer.component';
import { CategoryShippingComponent } from './category-shipping/category-shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    TopBarComponent,
    MainTopComponent,
    BottonBarComponent,
    NavBarComponent,
    SearchComponent,
    CategoryShippingComponent,
    SidebarCategoryComponent,
    MainFooterComponent,
    FooterBottomComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
    /*
    FormsModule,
    ReactiveFormsModule,*/
 //   TranslateModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
  //  FormsModule,
  /*
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    */
  //  SharedModule,
    TopBarComponent,
    MainTopComponent,
    BottonBarComponent,
    NavBarComponent,
    SearchComponent,
    CategoryShippingComponent,
    SidebarCategoryComponent,
    MainFooterComponent,
    FooterBottomComponent,
    FooterComponent
  ]

})
export class SharedModule { }
