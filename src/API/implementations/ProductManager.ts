import type {IProduct} from "../../business-logic/IProduct.ts";
import {CentreURLRequests} from "../CentreURLRequests.ts";
import type {DSProduct} from "../DSProduct.ts";

export class ProductManager {
    async getAllProducts(): Promise<IProduct[]> {
        try {
            const response = await fetch(CentreURLRequests.getAllProducts());
            if (!response.ok) {
                throw {
                    message: `Server error: ${response.statusText}`,
                    status: response.status
                };
            }
            const products: DSProduct[] = await response.json();
            return products.map((p): IProduct => this.convertFromDSProductToIProduct(p));
        } catch (err: any) {
            throw {
                message: err.message ?? 'Unknown error',
                status: err.status ?? null
            };
        }
    }

    async getProductById(id: number): Promise<IProduct> {
        try {
            const response = await fetch(`${CentreURLRequests.getASingleProduct()}${id}`);
            if (!response.ok) {
                throw {
                    message: `Server error: ${response.statusText}`,
                    status: response.status
                };
            }
            const product: DSProduct = await response.json();
            return this.convertFromDSProductToIProduct(product);
        } catch (err: any) {
            throw {
                message: err.message ?? 'Unknown error',
                status: err.status ?? null
            };
        }
    }

    private convertFromDSProductToIProduct(dsProduct: DSProduct): IProduct {
        return {
            getId: () => dsProduct.id,
            getTitle: () => dsProduct.title,
            getCategory: () => dsProduct.category,
            getPrice: () => ({
                getCurrencySymbol: () => 'USD',
                getValue: () => dsProduct.price
            }),
            getRate: () => ({
                getValue: () => dsProduct.rating.rate,
                getCount: () => dsProduct.rating.count
            }),
            getImageUrl: () => dsProduct.image
        }
    }
}