import type {IRate} from "../../IRate.ts";
import type {INumberValidator} from "../../validators/INumberValidator.ts";
import {ValueOfRateValidator} from "./Validators/ValueOfRateValidator.ts";
import {ReviewCountValidator} from "./Validators/ReviewCountValidator.ts";
import {RateError} from "../../Errors/RateError.ts";

export class ExampleOfRate implements IRate {
    private readonly valueValidator: INumberValidator = new ValueOfRateValidator();
    private readonly reviewCountValidator: INumberValidator = new ReviewCountValidator();

    private readonly value: number;
    private readonly reviewCount: number;

    constructor(value: number,
                reviewCount: number) {
        if(!this.valueValidator.checkTheNumber(value))
            throw new RateError('error creating rating level');
        this.value = value;

        if(!this.reviewCountValidator.checkTheNumber(reviewCount))
            throw new RateError('error creating rating review count');
        this.reviewCount = reviewCount;
    }

    getValue(): number {
        return this.value;
    }

    getCount(): number {
        return this.reviewCount;
    }
}