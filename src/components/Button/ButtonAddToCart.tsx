import styles from './button-add-to-cart.module.scss';
import clsx from "clsx";

export const ButtonAddToCart = () => {
    return (
        <button
            type='button'
            className={clsx(
                styles['button-add-to-cart'],
                styles['button-add-to-cart--hover'],
                styles['button-add-to-cart--active'],
            )}>Add to cart</button>
    );
}