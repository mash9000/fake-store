import styles from './product-card.module.scss';
import {ImageOfProduct} from "../ImageOfProduct/ImageOfProduct.tsx";
import {Rate} from "../Rate/Rate.tsx";
import type {FC} from "react";
import type {
    ImageOfProductsProps
} from "../ImageOfProduct/ImageOfProductsProps.ts";
import type {RateProps} from "../Rate/RateProps.ts";
import {ButtonAddToCart} from "../Button/ButtonAddToCart.tsx";

type ProductCardProps = ImageOfProductsProps & RateProps & {
    category: string,
    title: string,
    price: string
};

export const ProductCard: FC<ProductCardProps> = ({
                                                      imageUrl,
                                                      description,
                                                      value,
                                                      numberOfReviews,
                                                      category,
                                                      title,
                                                      price
                                                  }) => {
    return (
        <article className={styles['product-card']}>
            <ImageOfProduct
                imageUrl={imageUrl}
                description={description}/>
            <h4 className={styles['product-card__title']}>{title}</h4>
            <p className={styles['product-card__category']}>{category}</p>
            <div className={styles['product-card__price-and-rate-box']}>
                <p className={styles['product-card__price']}>{price}</p>
                <Rate
                    value={value}
                    numberOfReviews={numberOfReviews}/>
                <ButtonAddToCart/>
            </div>
        </article>
    );
}