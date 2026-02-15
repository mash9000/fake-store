import styles from './button.module.scss';
import clsx from "clsx";

export const Button = () => {
    return (
        <button
            type='button'
            className={clsx(
                styles['button'],
                styles['button--hover'],
                styles['button--active'],
            )}>Add to cart</button>
    );
}