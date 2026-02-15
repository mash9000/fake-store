import styles from './button-try-again.module.scss';
import clsx from "clsx";
import type {FC} from "react";
import type {ButtonTryAgainProps} from "./ButtonTryAgainProps.ts";

export const ButtonTryAgain: FC<ButtonTryAgainProps> = ({executeFunction}) => {
    return (
        <button
            type='button'
            className={clsx(
                styles['button-try-again'],
                styles['button-try-again--hover'],
                styles['button-add-to-cart--active'])}
            onClick={() => executeFunction()}>Try again</button>
    );
}