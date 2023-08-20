import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { SubCategoryDto } from 'src/app/models/sub-category';
import { CategoryDto } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-category',
  templateUrl: './sidebar-category.component.html',
  styleUrls: ['./sidebar-category.component.scss']
})
export class SidebarCategoryComponent implements OnInit {

  subCategoriesListDTOs!: SubCategoryDto[];
  categoriesListDTOs!: CategoryDto[];

  constructor(public catService: CategoryService
  ){}

  ngOnInit(): void {
    this.getListOfCategoriesDTOs();
  }

  getListOfCategoriesDTOs() {
    this.catService.getAllCategories()
      .subscribe(
      (response: CategoryDto[]) => {
        this.categoriesListDTOs = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }    
    );
  }

}
