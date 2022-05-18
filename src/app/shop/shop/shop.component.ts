import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cart-item';
import { CategoryDto } from 'src/app/models/category';
import { ProductDto } from 'src/app/models/product';
import { SubCategoryDto } from 'src/app/models/sub-category';
import { CartService } from 'src/app/services/cart.service';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { ProductService } from 'src/app/services/product.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productListDTOs!: ProductDto[];
  subCategoryListDTOs!: SubCategoryDto[];
  catetoryList!: CategoryDto[];

  size: number = 9;
  currentPage: number = 1;
  totalPages!: number;
  pages!: Array<number>;

  currentTime: number = 0;
  currentCategoryId!: number;
  previousCategoryId: number = 1;

  searchMode: boolean = false;
  priceSearch!: number;
  starRating = 0;
  currentRating = 4;

  numberTotalOfProduct: any;

  products: ProductDto[] = [];
  page: number = 1;
  pageLength: number = 12;
  orderSize: number = 0;

  constructor(public catalService: CatalogueService,
              private prodService: ProductService,
              private cartService: CartService,
              private subCat: SubCategoryService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router,
  ){ }

  ngOnInit() {
    this.getNumberTotalOfProduct();
    this.getScategoryListDTOs();
    this.route.paramMap.subscribe(()=> {
      this.getListProductDTOs();
      this.finishOrders();
    });
  }

  getScategoryListDTOs() {
    this.subCat.getAllSubCategoryDtos().subscribe(
      (response: SubCategoryDto[]) => {
        this.subCategoryListDTOs = response;
        console.log(this.subCategoryListDTOs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  finishOrders(){
    let result1 = this.route.snapshot.paramMap.has('id');
    let result2 = this.route.snapshot.paramMap.has('keyword');
    if(result1){
      this.getOrderByCategoryId()
    } else if (result2) {
      this.getAllOrdersContainingKey()
    } else {
      this.getOrders();
    }
  }

  getOrders(){
    this.catalService.getProductsLength().subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.catalService.getAllProductsByPageable(this.page-1,this.pageLength).subscribe(
      data => {
        this.products = data
        console.log(data)
      }
    )
  }

  getOrderByCategoryId(){
    let idCategory = this.route.snapshot.paramMap.get('id');
    this.catalService.getProductsLengthByCategoryId(idCategory).subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.catalService.getAllProductsByCategoryId(idCategory,this.page-1,this.pageLength).subscribe(
      data => {
        this.products = data
      }
    )
  }

  getAllOrdersContainingKey(){
    let keyWord = this.route.snapshot.paramMap.get('keyWord');
    this.catalService.getProductsLengthByKeyword(keyWord).subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.catalService.getAllProductsByKeyword(keyWord,this.page-1,this.pageLength).subscribe(
      data => {
        this.products = data
      }
    )
  }

  doing() {
    this.finishOrders()
  }

  pageSize(event: Event) {
    this.pageLength = +(<HTMLInputElement>event.target).value
    this.finishOrders()
  }

  getProductListDTOs() {
    this.prodService.getALLProductDTOs().subscribe(
      (response: ProductDto[]) => {
        this.productListDTOs = response;
        console.log(this.productListDTOs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getListProductDTOs() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    this.priceSearch = +this.route.snapshot.paramMap.get('price')!;
    if (this.searchMode) {
      this.getProductListDTOsBySearchKeyword();
    }
     else  {
      this.handlerListProductDTOs();
      console.log( this.handlerListProductDTOs());
    }
  }

  handlerListProductDTOs() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }else {
      this.currentCategoryId = 1;
    }

    if(this.previousCategoryId != this.currentCategoryId) {
      this.currentPage = 1;
    }
    this.previousCategoryId = this.currentCategoryId;

    this.catalService.getListProductDTOBySubCategoryByPageable(
          this.currentCategoryId,
          this.currentPage - 1,
          this.size).subscribe(this.processResult());
  }

  processResult() {
    return (data:any) => {
      this.totalPages = data['totalPages'];
      this.pages = new Array(data['totalPages']);
      this.productListDTOs = data['content'];
    }
  }

  getProductDTOByPageable() {
    this.catalService.getListProductDTOByPageable(this.currentPage, this.size)
      .subscribe((data:any)=> {
        this.totalPages = data['totalPages'];
        this.pages = new Array(data['totalPages']);
        this.productListDTOs = data['content'];
        console.log(data);
      },err=> {
        console.log(err);
      });
  }

  getProductListDTOsBySearchKeyword() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.catalService.getListProductByKeyword(keyword).subscribe(
      data  => {
        this.productListDTOs = data;
      }
    )
  }

  getArticleListDTOsBySamePrice() {
    const hasPriceId: boolean = this.route.snapshot.paramMap.has('price');
    if (hasPriceId) {
      this.priceSearch = +this.route.snapshot.paramMap.get('price')!;
    }
    this.catalService.getListProductBySamePrice(this.priceSearch).subscribe(
      data  => {
        this.productListDTOs = data;
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

  getTS() {
    return this.currentTime;
  }

  onPageArticle(i: number) {
    this.currentPage = i;
    this.getProductDTOByPageable();
  }

  filtrer(event: any) {
    console.log(event.target.value)
    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low, high) => low.price - high.price);
          break;
        }
      case "High":
        {
          this.products = this.products.sort((low, high) => high.price - low.price);
          break;
        }
      case "Name":
        {
          this.products = this.products.sort(function (low, high) {
            if (low.designation < high.designation) {
              return -1;
            }
            else if (low.designation > high.designation) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }
      case "ZName":
        {
          this.products = this.products.sort(function (low, high) {
            if (low.designation > high.designation) {
              return -1;
            }
            else if (low.designation < high.designation) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
      }
      default: {
        this.products = this.products.sort((low, high) => low.price - high.price);
        break;
      }
    }
    return this.products;
  }

  getNumberTotalOfProduct() {
    this.catalService.getNumberTotalOfProduct().subscribe(
      data  => {
        this.numberTotalOfProduct = data;
      }
    );
  }

  bynow() {
    this.router.navigate(["cart"]);
  }

}
