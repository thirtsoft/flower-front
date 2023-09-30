import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SubCategoryDto } from 'src/app/models/sub-category';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-category-brand',
  templateUrl: './category-brand.component.html',
  styleUrls: ['./category-brand.component.scss']
})
export class CategoryBrandComponent implements OnInit {

  subCategoriesListDTOs!: SubCategoryDto[];

  constructor(public subcatService: SubCategoryService
  ){}

  ngOnInit(): void {
    this.getListOfSubCategorieDTOs();
  }

  getListOfSubCategorieDTOs() {
    this.subcatService.getAllSubCategories()
      .subscribe(
      (response: SubCategoryDto[]) => {
        this.subCategoriesListDTOs = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

  }
  
}
