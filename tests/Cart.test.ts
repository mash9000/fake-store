import {describe, expect, it} from "vitest";
import {ICart} from "../src/business-logic/ICart";
import {IProduct} from "../src/business-logic/IProduct";
import type {ICurrency} from "../src/business-logic/ICurrency";
import type {IRate} from "../src/business-logic/IRate";
import {CartError} from "../src/business-logic/Errors/CartError";
import {
    ExampleOfCart
} from "../src/business-logic/implementations/Cart/ExampleOfCart";

const returnTestedClass = (): ExampleOfCart => {
    return new ExampleOfCart();
}

describe('Cart', () => {
    describe('cart add product validation', () => {
        const valuesForTest = 100;
        it('добавил X продуктов - вернулось X продуктов', () => {
            const cart: ICart = returnTestedClass();
            const price: ICurrency = {
                getCurrencySymbol: () => 'RUB',
                getValue: () => 4.32
            }
            const rate: IRate = {
                getValue: () => 43,
                getCount: () => 43
            }
            const productTest: IProduct = {
                getId: () => Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000,
                getTitle: () => 'fsf fsdf',
                getPrice: () => price,
                getCategory: () => 'fsdf',
                getImageUrl: () => new URL('https://ya.ru/').href,
                getRate: () => rate
            }
            for (let i = 1; i <= valuesForTest; i++) {
                cart.addProduct(productTest);
            }
            expect(cart.getListOfProductsInTheCart().length).toStrictEqual(valuesForTest);
        });
        it('добавление продуктов с одинаковым id выбрасывает ошибку', () => {
            const cart: ICart = returnTestedClass();
            const price: ICurrency = {
                getCurrencySymbol: () => 'RUB',
                getValue: () => 4.32
            }
            const rate: IRate = {
                getValue: () => 43,
                getCount: () => 43
            }
            const productTest1: IProduct = {
                getId: () => 2,
                getTitle: () => 'fsf fsdf',
                getPrice: () => price,
                getCategory: () => 'fsdf',
                getImageUrl: () => new URL('https://ya.ru/').href,
                getRate: () => rate
            }

            const productTest2: IProduct = {
                getId: () => 2,
                getTitle: () => 'fsf fsdf',
                getPrice: () => price,
                getCategory: () => 'fsdf',
                getImageUrl: () => new URL('https://ya.ru/').href,
                getRate: () => rate
            }
            expect(() => cart.addProduct(productTest1)).not.toThrow();
            expect(() => cart.addProduct(productTest2)).toThrow(CartError);
        });
    });

    describe('cart remove product validation', () => {
        const cart: ICart = returnTestedClass();
        const price: ICurrency = {
            getCurrencySymbol: () => 'RUB',
            getValue: () => 4.32
        }
        const rate: IRate = {
            getValue: () => 43,
            getCount: () => 43
        }
        it('fa', () => {
            expect(() => cart.removeProductById(377)).toThrow(CartError);
        });
    });

    // describe('get all products', () => {
    //     const cart: ICart = returnTestedClass();
    //     const price: ICurrency = {
    //         getCurrencySymbol: () => 'RUB',
    //         getValue: () => 4.32
    //     }
    //     const rate: IRate = {
    //         getValue: () => 43,
    //         getCount: () => 43
    //     }
    //     const productTest: IProduct = {
    //         getId: () => 2,
    //         getTitle: () => 'fsf fsdf',
    //         getPrice: () => price,
    //         getCategory: () => 'fsdf',
    //         getImageUrl: () => new URL('https://ya.ru/').href,
    //         getRate: () => rate
    //     }
    //     cart.addProduct(productTest);
    //     expect(Array.isArray(cart.getListOfProductsInTheCart())).toBeTruthy();
    //     cart.getListOfProductsInTheCart().forEach(product => {
    //         expect(product).toEqual(expect.objectContaining({
    //             getId: expect.any(Function),
    //             getTitle: expect.any(Function),
    //             getCategory: expect.any(Function),
    //             getPrice: expect.any(Function),
    //             getRate: expect.any(Function),
    //             getImageUrl: expect.any(Function)
    //         }));
    //     });
    // });
});