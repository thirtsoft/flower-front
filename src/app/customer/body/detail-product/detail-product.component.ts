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
  productListDTOs!: ProductDto[];

  ratingListDTOs: RatingDto[] = [];

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

 //   this.getRelatedProducts();
    
//    this.countNumberOfRatingForProduct();

//    this.getListOfTop4RatingOrderByCreatedDateDescByPrpductId();

  }

  getSingleProduct() {
    const ref: string = this.actRoute.snapshot.paramMap.get('reference')!;
    this.prodService.getProductDtoByReference(ref).subscribe(
      response => {
        this.productData = response;
        console.log(this.productData);
        }
        ,(error: HttpErrorResponse) => {
      alert(error.message);
    });

  }

  getRelatedProducts() {
    this.catalService.getTop6ProductOrderByIdDesc().subscribe(
      (response: ProductDto[]) => {
        this.productListDTOs = response;
        console.log(this.productListDTOs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  addTocart() {
    console.log(`total designation: ${this.productData.designation}, total price: ${this.productData.price}`);
    const cartItem = new CartItem(this.productData);
    this.cartService.addTocart(cartItem);
    this.toastr.success('au panier avec succès','Article Ajoutée', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });

  }

  countNumberOfRatingForProduct() {
    this.ratService.countNumberOfRatingDtoByProductId(this.ref)
      .subscribe(
        response => {
          this.numberOfRatingToProduct = response;
          console.log(this.numberOfRatingToProduct);
        }
        ,(error: HttpErrorResponse) => {
      alert(error.message);
    });

  }

  getListOfTop4RatingOrderByCreatedDateDescByPrpductId() {
    this.ratService.getTop4RatingOrderByCreatedDateDescByProduct(this.ref)
      .subscribe(
      (response: RatingDto[]) => {
        this.ratingListDTOs = response;
        console.log(this.ratingListDTOs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  bynow() {
    this.router.navigate(['cart']);
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
