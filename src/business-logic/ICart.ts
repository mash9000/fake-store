import type {IProduct} from "./IProduct.ts";

export interface ICart {
    addProduct(product: IProduct): IProduct[];

    removeProductById(productId: number): IProduct[];

    getListOfProductsInTheCart(): IProduct[];
}