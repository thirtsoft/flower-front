import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryDto } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-category-shipping',
  templateUrl: './category-shipping.component.html',
  styleUrls: ['./category-shipping.component.scss']
})
export class CategoryShippingComponent implements OnInit {

  categoryListDTOs!: CategoryDto[];

  constructor(public crupApi: SubCategoryService,
              private cat: CategoryService
  ){ }

  ngOnInit(): void {
    this.getCategoriesListDTOs();
  }

  getCategoriesListDTOs() {
    this.cat.getAllCategories().subscribe(
      (response: CategoryDto[]) => {
        this.categoryListDTOs = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
