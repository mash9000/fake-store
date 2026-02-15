import styles from './image-of-product.module.scss';
import type {ImageOfProductsProps} from "./ImageOfProductsProps.ts";
import type {FC} from "react";

export const ImageOfProduct: FC<ImageOfProductsProps> = ({
                                                             imageUrl,
                                                             description
                                                         }) => {
    return (
        <div className={styles['image-of-product__container']}>
            <img
                className={styles['image-of-product']}
                src={imageUrl}
                alt={description}/>
        </div>
    );
}