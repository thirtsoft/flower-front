import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cart-item';
import { ProductDto } from 'src/app/models/product';
import { RatingDto } from 'src/app/models/rating';
import { CartService } from 'src/app/services/cart.service';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { ProductService } from 'src/app/services/product.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  qtyDefault = 1;

  productData: ProductDto = new ProductDto();
  ratingListDTOs!: RatingDto[];

  numberOfRatingToProduct: any;
  ref!: string;
  currentRating: any = 4;
  starRating = 0;
  maxRatingValue: any = 5;

  constructor(public prodService: ProductService,
              public catalService: CatalogueService,
              private cartService: CartService,
              public ratService: RatingService,
              private toastr: ToastrService,
              private router: Router,
              private actRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(()=> {
      this.getSingleProduct();
    });

    this.countNumberOfRatingForProduct();

    this.getListOfTop4RatingOrderByCreatedDateDescByPrpductId();

  }

  getSingleProduct() {
    this.ref = this.actRoute.snapshot.paramMap.get('reference')!;
    this.prodService.getProductDtoByReference(this.ref).subscribe(
      response => {
        this.productData = response;
        }
        ,(error: HttpErrorResponse) => {
          console.log(error);
        });

  }

  countNumberOfRatingForProduct() {
    this.ratService.countNumberOfRatingDtoByProductId(this.ref)
      .subscribe(
        response => {
          this.numberOfRatingToProduct = response;
        }
        , (error: HttpErrorResponse) => {
          console.log(error);
        });

  }

  getListOfTop4RatingOrderByCreatedDateDescByPrpductId() {
    this.ratService.getTop4RatingOrderByCreatedDateDescByProduct(this.ref)
      .subscribe(
      (response: RatingDto[]) => {
        this.ratingListDTOs = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

  }

  addTocart() {
    console.log(`total designation: ${this.productData.designation}, total price: ${this.productData.price}`);
    const cartItem = new CartItem(this.productData);
    this.cartService.addTocart(cartItem);
    this.toastr.success('au panier avec succès','Produit Ajoutée', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });
  }

  minus() {
    this.qtyDefault = this.productData.quantite;
    if(this.qtyDefault > 1) {
      this.qtyDefault--;
      console.log('minus');
    }

  }

  plus() {
    this.qtyDefault++;
    console.log('plus');
  }


}
