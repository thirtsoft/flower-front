import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryDto } from 'src/app/models/category';
import { SubCategoryDto } from 'src/app/models/sub-category';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-category-shipping',
  templateUrl: './category-shipping.component.html',
  styleUrls: ['./category-shipping.component.scss']
})
export class CategoryShippingComponent implements OnInit {

  subCategoryListDTOs!: SubCategoryDto[];
  categoryListDTOs!: CategoryDto[];
  catId!: number;

  constructor(public crupApi: SubCategoryService,
              private cat: CategoryService
  ){ }

  ngOnInit(): void {
  //  this.getCategoriesListDTOs();
    this.getSubCategoriesListDTOs();
  }

  getCategoriesListDTOs() {
    this.cat.getCategorieDTOs().subscribe(
      (response: CategoryDto[]) => {
        this.categoryListDTOs = response;
        for(let i=0; i<this.categoryListDTOs.length; i++) {
          this.catId = this.categoryListDTOs[i].id;

          this.crupApi.getSuCategoriesDtosByCategoryId(this.catId).subscribe(
            (data: SubCategoryDto[]) => {
              this.subCategoryListDTOs = data;
              console.log(this.subCategoryListDTOs);
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );

        }
        console.log(this.categoryListDTOs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  getSubCategoriesListDTOs() {
    this.crupApi.getAllSubCategoryDtos().subscribe(
      (response: SubCategoryDto[]) => {
        this.subCategoryListDTOs = response;
        console.log(this.subCategoryListDTOs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
