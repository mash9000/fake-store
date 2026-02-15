import {describe, expect, it} from "vitest";
import {
    ExampleOfCurrency
} from "../src/business-logic/implementations/Currency/ExampleOfCurrency";
import {
    CurrencyError
} from "../src/business-logic/Errors/CurrencyError";

const createCurrency = (overrides?: any): ExampleOfCurrency => {
    // Класс для подмены
    return new ExampleOfCurrency(
        overrides?.symbolStr ?? "RUB",
        overrides?.value ?? 10,
    );
}

describe('Currency', () => {
    describe('currency title validation', () => {
        describe('valid values  ', () => {
            const validValues = ['USD', 'RUB', 'CAD'];
            it.each(validValues)('create currency for %s', (symbolStr:string) => {
                expect(() => createCurrency({symbolStr})).not.toThrow();
            });
        });

        describe('invalid values', () => {
            const invalidValues = ['', 'Usd', 'usd', '123', '$€!', ' USD', 'USD ', 'U S D'];
            it.each(invalidValues)('create currency for %s', (symbolStr: string) => {
                expect(() =>  createCurrency({symbolStr})).toThrow(CurrencyError);
            }) ;
        });
    });

    describe('currency value validation', () => {
        describe('valid values', () => {
            const validValues = [0, 5, 52.5, 90000000000];
            it.each(validValues)('creates currency for %s', (value: number) => {
                expect(() => createCurrency({value})).not.toThrow();
            });
        });

        describe('invalid values', () => {
            const invalidValues = [-54353, -3, NaN, Infinity];
            it.each(invalidValues)('throws for %s', (value: number) => {
                expect(() => createCurrency({value})).toThrow(CurrencyError);
            });
        });
    })
});