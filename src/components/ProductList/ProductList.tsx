import type {ProductListProps} from "./ProductListProps.ts";
import type {FC} from "react";
import {ProductCard} from "../ProductCard/ProductCard.tsx";
import {nanoid} from "nanoid";
import styles from './product-list.module.scss';

export const ProductList: FC<ProductListProps> = ({productList}) => {
    return (
        <div className={styles['product-list']}>
            {
                productList.map(product => (
                    <ProductCard key={nanoid()}
                                 value={product?.getRate().getValue() ?? 0}
                                 imageUrl={product?.getImageUrl() ?? ''}
                                 description={product?.getTitle() ?? ''}
                                 numberOfReviews={product?.getRate().getCount() ?? 0}
                                 category={product?.getCategory() ?? ''}
                                 title={product?.getTitle() ?? ''}
                                 price={`${product?.getPrice().getCurrencySymbol()} ${product?.getPrice().getValue()}`}/>
                ))
            }
        </div>
    );
}