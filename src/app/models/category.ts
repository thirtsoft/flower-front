import { SubCategory, SubCategoryDto } from "./sub-category";

export class Category {
    id!: number;
    categoryName!: string;
    description!: string;
}

export class CategoryDto {
    id!: number;
    categoryName!: string;
    description!: string;
    subcategoryList :Array<SubCategory>=[];
}







