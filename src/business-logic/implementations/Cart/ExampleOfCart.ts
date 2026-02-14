import type {ICart} from "../../ICart.ts";
import type {IProduct} from "../../IProduct.ts";
import {CartError} from "../../Errors/CartError.ts";

export class ExampleOfCart implements ICart {
    private readonly products: Map<number, IProduct> = new Map<number, IProduct>();

    addProduct(product: IProduct): IProduct[] {
        if(this.products.has(product.getId()))
            throw new CartError('the product with the specified ID is already in your basket');
        this.products.set(product.getId(), product);
        return this.getListOfProductsInTheCart();
    }

    getListOfProductsInTheCart(): IProduct[] {
        return [...this.products.values()];
    }

    removeProductById(productId: number): IProduct[] {
        if(!this.products.has(productId))
            throw new CartError('the product with the specified ID is not in the basket');
        this.products.delete(productId);
        return this.getListOfProductsInTheCart();
    }
}