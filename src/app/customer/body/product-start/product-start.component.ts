import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cart-item';
import { ProductDto } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-product-start',
  templateUrl: './product-start.component.html',
  styleUrls: ['./product-start.component.scss']
})
export class ProductStartComponent implements OnInit {

  productListDTOBySelected!: ProductDto[];

  currentTime: number = 0;
  searchMode: boolean = false;
  starRating = 0;
  currentRating = 4;

  constructor(public catalogueService: CatalogueService,
              private cartService: CartService,
              private toastr: ToastrService,
              private activeRoute: ActivatedRoute
){ }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getListProductsDTOs();
      }
    );
  }

  getListProductsDTOs() {
    this.searchMode = this.activeRoute.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      // do search work
      this.getProductsListDTOsBySearchKeyword();
    } else {
      //display product list
      this.getProductsListDTOsBySelectedIsTrue();
    }
  }

  getProductsListDTOsBySelectedIsTrue() {
    this.catalogueService.getListProductBySelectedIsTrue().subscribe(
      (response: ProductDto[]) => {
        this.productListDTOBySelected = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

  }

  getProductsListDTOsBySearchKeyword() {
    const keyword: string = this.activeRoute.snapshot.paramMap.get('keyword')!;
    this.catalogueService.getListProductByKeyword(keyword).subscribe(
      data  => {
        this.productListDTOBySelected = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  addTocart(productDTO: ProductDto) {
    console.log(`total designation: ${productDTO.designation}, total price: ${productDTO.price}`);
    const cartItem = new CartItem(productDTO);
    this.cartService.addTocart(cartItem);
    this.toastr.success('au panier avec succès','Article Ajoutée', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });

  }

}
