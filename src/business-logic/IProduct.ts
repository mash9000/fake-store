import type {ICurrency} from "./ICurrency.ts";
import type {IRate} from "./IRate.ts";

export interface IProduct {
    getId(): number;

    getTitle(): string;

    getPrice(): ICurrency;

    getCategory(): string;

    getImageUrl(): string;

    getRate(): IRate;
}