import type {IStringValidator} from "../../../validators/IStringValidator.ts";

export class CurrencySymbolValidator implements IStringValidator {
    private readonly symbolRegExp: RegExp = /^[A-Z]{2,}$/;

    checkTheLine(line: string): boolean {
        return this.symbolRegExp.test(line);
    }
}