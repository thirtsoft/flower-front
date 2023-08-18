import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cart-item';
import { ProductDto } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-arrive-product',
  templateUrl: './new-arrive-product.component.html',
  styleUrls: ['./new-arrive-product.component.scss']
})
export class NewArriveProductComponent implements OnInit {

  top8NewArrivedproductList!: ProductDto[];

  constructor(public crupApi: ProductService,
              private cartService: CartService,
              public catalService: CatalogueService,
              private toastr: ToastrService
  ){ }

  ngOnInit(): void {
    this.getTop8NewArrivedProductList();
  }

  getTop8NewArrivedProductList() {
    this.crupApi.getTop8ProductDTOsByIdDesc().subscribe(
      (response: ProductDto[]) => {
        this.top8NewArrivedproductList = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  addTocart(prod: ProductDto) {
    console.log(`total designation: ${prod.designation}, total price: ${prod.price}`);
    const cartItem = new CartItem(prod);
    this.cartService.addTocart(cartItem);
    this.toastr.success('au panier avec succès','Article Ajoutée', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });

  }


}
