import { Category, CategoryDto } from "./category";

export class SubCategory {
    id!: number;
    subCategoryName!: string;
    description!: string;
    category!: Category;
}

export class SubCategoryDto {
    id!: number;
    subCategoryName!: string;
    description!: string;
    
    categoryDto!: CategoryDto;
}

