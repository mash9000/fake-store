import type {INumberValidator} from "../../../validators/INumberValidator.ts";

export class ValueOfCurrencyValidator implements INumberValidator {
    checkTheNumber(num: number): boolean {
        return num >= 0 && Number.isFinite(num);
    }
}