import {describe, expect, it} from "vitest";
import {
    ExampleOfRate
} from "../src/business-logic/implementations/Rate/ExampleOfRate";
import {
    ExampleOfProduct
} from "../src/business-logic/implementations/Product/ExampleOfProduct";
import {ProductError} from "../src/business-logic/Errors/ProductError";
import {
    ExampleOfCurrency
} from "../src/business-logic/implementations/Currency/ExampleOfCurrency";

const createProduct = (overrides?: any): ExampleOfProduct => {
    // Класс для подмены
    return new ExampleOfProduct(
        overrides?.id ?? 1,
        overrides?.title ?? "Default Title",
        overrides?.price ?? new ExampleOfCurrency("RUB", 100),
        overrides?.category ?? "Default Category",
        overrides?.imageUrl ?? new URL("https://example.com"),
        overrides?.rate ?? new ExampleOfRate(3, 5)
    );
}

describe('Product', () => {
    describe('product id validation', () => {
        describe('valid values', () => {
            const validValues = [1, 5000, 53847589345];
            it.each(validValues)('create product for %s', (id: number) => {
                expect(() => createProduct({id})).not.toThrow();
            });
        });

        describe('invalid values', () => {
            const invalidValues = [-4, 0, NaN, Infinity];
            it.each(invalidValues)('create product for %s', (id: number) => {
                expect(() => createProduct({id})).toThrow(ProductError);
            });
        });
    });

    describe('product title validation', () => {
        describe('valid values', () => {
            const validValues = ['Apples Gala 2013', 'Twix'];
            it.each(validValues)('create product for %s', (title: string) => {
                expect(() => createProduct({title})).not.toThrow();
            });
        });

        describe('invalid values', () => {
            const invalidValues = ['', ' apple', '1234', '$@#^@'];
            it.each(invalidValues)('create product for %s', (title: string) => {
                expect(() => createProduct({title})).toThrow(ProductError);
            });
        });
    });

    describe('product category validation', () => {
        describe('valid values', () => {
            const validValues = ['Apple', 'Brazilian fruits'];
            it.each(validValues)('create product for %s', (category: string) => {
                expect(() => createProduct({category})).not.toThrow();
            });
        });

        describe('invalid values', () => {
            const invalidValues = ['', ' apple', '1234', '$@#^@'];
            it.each(invalidValues)('create product for %s', (category: string) => {
                expect(() => createProduct({category})).toThrow(ProductError);
            });
        });
    });
});