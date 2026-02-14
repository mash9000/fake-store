import type {ICurrency} from "../../ICurrency.ts";
import type {IStringValidator} from "../../validators/IStringValidator.ts";
import {CurrencyError} from "../../Errors/CurrencyError.ts";
import {CurrencySymbolValidator} from "./Validators/CurrencySymbolValidator.ts";
import type {INumberValidator} from "../../validators/INumberValidator.ts";
import {ValueOfCurrencyValidator} from "./Validators/ValueOfCurrencyValidator.ts";

export class ExampleOfCurrency implements ICurrency {
    private readonly symbolValidator: IStringValidator = new CurrencySymbolValidator();
    private readonly valueValidator: INumberValidator = new ValueOfCurrencyValidator();

    private readonly symbolStr: string;
    private readonly value: number;

    constructor(symbolStr: string,
                value: number) {
        if (!this.symbolValidator.checkTheLine(symbolStr))
            throw new CurrencyError('error creating text representation of currency');
        this.symbolStr = symbolStr;

        if (!this.valueValidator.checkTheNumber(value))
            throw new CurrencyError('error creating number value representation of currency');
        this.value = value;
    }

    getCurrencySymbol(): string {
        return this.symbolStr;
    }

    getValue(): number {
        return this.value;
    }
}