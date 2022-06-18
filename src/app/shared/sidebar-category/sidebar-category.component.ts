import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { SubCategoryDto } from 'src/app/models/sub-category';

@Component({
  selector: 'app-sidebar-category',
  templateUrl: './sidebar-category.component.html',
  styleUrls: ['./sidebar-category.component.scss']
})
export class SidebarCategoryComponent implements OnInit {

  subCategoriesListDTOs!: SubCategoryDto[];

  constructor(public subCatService: SubCategoryService
  ){}

  ngOnInit(): void {
    this.getListOfSubCategorieDTOs();
  }

  getListOfSubCategorieDTOs() {
    this.subCatService.getAllSubCategoryDtos()
      .subscribe(
      (response: SubCategoryDto[]) => {
        this.subCategoriesListDTOs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

}
