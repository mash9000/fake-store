import type {IProduct} from "../../IProduct.ts";
import type {ICurrency} from "../../ICurrency.ts";
import type {IRate} from "../../IRate.ts";
import type {INumberValidator} from "../../validators/INumberValidator.ts";
import {ProductIdValidator} from "./Validators/ProductIdValidator.ts";
import {ProductError} from "../../Errors/ProductError.ts";
import type {IStringValidator} from "../../validators/IStringValidator.ts";
import {
    ProductTitleValidator
} from "./Validators/ProductTitleValidator.ts";
import {
    ProductCategoryValidator
} from "./Validators/ProductCategoryValidator.ts";

export class ExampleOfProduct implements IProduct {
    private readonly productIdValidator: INumberValidator = new ProductIdValidator();
    private readonly id: number;

    private readonly titleValidator: IStringValidator = new ProductTitleValidator();
    private readonly title: string;

    private readonly categoryValidator: IStringValidator = new ProductCategoryValidator();
    private readonly category: string;

    constructor(id: number,
                title: string,
                private readonly price: ICurrency,
                category: string,
                private readonly imageUrl: URL,
                private readonly rate: IRate) {
        if (!this.productIdValidator.checkTheNumber(id))
            throw new ProductError('error when creating a product (incorrect id)');
        this.id = id;

        if (!this.titleValidator.checkTheLine(title))
            throw new ProductError('error when creating a product (incorrect title)');
        this.title = title;

        if (!this.categoryValidator.checkTheLine(category))
            throw new ProductError('error when creating a product (incorrect category)');
        this.category = category;
    }

    getCategory(): string {
        return this.category;
    }

    getId(): number {
        return this.id;
    }

    getImageUrl(): string {
        return this.imageUrl.href;
    }

    getPrice(): ICurrency {
        return this.price;
    }

    getRate(): IRate {
        return this.rate;
    }

    getTitle(): string {
        return this.title;
    }
}