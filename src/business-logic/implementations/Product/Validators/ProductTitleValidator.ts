import type {IStringValidator} from "../../../validators/IStringValidator.ts";

export class ProductTitleValidator implements IStringValidator {
    private readonly symbolRegExp: RegExp = /^(?=[A-Za-z0-9 ]+$)(?! )[A-Za-z]+[A-Za-z0-9 ]*[A-Za-z0-9]$/;

    checkTheLine(line: string): boolean {
        return this.symbolRegExp.test(line);
    }
}