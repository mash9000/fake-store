import {describe, expect, it} from "vitest";
import {
    ExampleOfRate
} from "../src/business-logic/implementations/Rate/ExampleOfRate";
import {RateError} from "../src/business-logic/Errors/RateError";

describe('IRate', () => {
    describe('rate level validation', () => {
        describe('valid values', () => {
            const validLevels = [0, 5, 10];

            it.each(validLevels)('creates rate for %s', (level) => {
                expect(() => new ExampleOfRate(level, 10)).not.toThrow();
            });
        });

        describe('invalid values', () => {
            const invalidLevels = [-1, 11, NaN, Infinity];

            it.each(invalidLevels)('throws for %s', (level) => {
                expect(() => new ExampleOfRate(level, 10)).toThrow(RateError);
            });
        });

    });


    describe('rate review count validation', () => {
        describe('valid review count', () => {
            const validLevels = [0, 5, 10000];

            it.each(validLevels)('creates rate for %s', (reviewCount) => {
                expect(() => new ExampleOfRate(3.5, reviewCount)).not.toThrow();
            });
        });

        describe('invalid review count', () => {
            const invalidLevels = [-1, NaN, Infinity];

            it.each(invalidLevels)('throws for %s', (reviewCount) => {
                expect(() => new ExampleOfRate(3.5, reviewCount)).toThrow(RateError);
            });
        });

    });
});