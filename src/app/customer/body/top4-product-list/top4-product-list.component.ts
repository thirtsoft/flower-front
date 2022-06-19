import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cart-item';
import { ProductDto } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-top4-product-list',
  templateUrl: './top4-product-list.component.html',
  styleUrls: ['./top4-product-list.component.scss']
})
export class Top4ProductListComponent implements OnInit {

  producttop4ListDTO!: ProductDto[];

  currentTime: number = 0;
  searchMode: boolean = false;
  starRating = 0;
  currentRating = 4;

  constructor(public catalogueService: CatalogueService,
              private cartService: CartService,
              private prodService: ProductService,
              private toastr: ToastrService
){ }

  ngOnInit(): void {
    this.getTop4ProductsListDTOs();
  }

  getTop4ProductsListDTOs() {
    this.prodService.getTop4ProductDTOsByIdDesc().subscribe(
      (response: ProductDto[]) => {
        this.producttop4ListDTO = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addTocart(productDTO: ProductDto) {
    console.log(`total designation: ${productDTO.designation}, total price: ${productDTO.price}`);
    const cartItem = new CartItem(productDTO);
    this.cartService.addTocart(cartItem);
    this.toastr.success('au panier avec succès','Article Ajoutée', {
      timeOut: 1000,
      positionClass: 'toast-top-right',
    });

  }

}
