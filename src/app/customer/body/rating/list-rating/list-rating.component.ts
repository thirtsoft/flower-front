import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/app/models/product';
import { RatingDto } from 'src/app/models/rating';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { ProductService } from 'src/app/services/product.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-list-rating',
  templateUrl: './list-rating.component.html',
  styleUrls: ['./list-rating.component.scss']
})
export class ListRatingComponent implements OnInit {

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
              public ratService: RatingService,
              private actRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(()=> {
      this.getSingleProduct();
    });
    this.getListOfTop4RatingOrderByCreatedDateDescByPrpductId();
  }

  getSingleProduct() {
    this.ref = this.actRoute.snapshot.paramMap.get('reference')!;
    this.prodService.getProductDtoByReference(this.ref).subscribe(
      response => {
        this.productData = response;
        console.log(this.productData);
        }
        , (error: HttpErrorResponse) => {
          console.log(error);
        }
    );

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
}