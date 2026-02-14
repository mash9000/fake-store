import type {INumberValidator} from "../../../validators/INumberValidator.ts";

export class ValueOfRateValidator implements INumberValidator {
    checkTheNumber(num: number): boolean {
        return num >= 0 && num <= 10;
    }
}