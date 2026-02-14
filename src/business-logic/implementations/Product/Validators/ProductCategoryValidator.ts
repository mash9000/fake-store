import type {IStringValidator} from "../../../validators/IStringValidator.ts";

export class ProductCategoryValidator implements IStringValidator {
    private readonly symbolRegExp: RegExp = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    checkTheLine(line: string): boolean {
        return this.symbolRegExp.test(line);
    }
}