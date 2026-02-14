import type {INumberValidator} from "../../../validators/INumberValidator.ts";

export class ProductIdValidator implements INumberValidator {
    checkTheNumber(num: number): boolean {
        return Number.isInteger(num) && num >= 1 && Number.isFinite(num);
    }
}