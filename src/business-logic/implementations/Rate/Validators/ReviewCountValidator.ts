import type {INumberValidator} from "../../../validators/INumberValidator.ts";

export class ReviewCountValidator implements INumberValidator {
    checkTheNumber(num: number): boolean {
        return num >= 0 && num < Number.MAX_SAFE_INTEGER && Number.isInteger(num);
    }
}