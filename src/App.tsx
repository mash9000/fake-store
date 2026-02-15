import {useEffect, useState} from "react";
import type {IProduct} from "./business-logic/IProduct.ts";
import {ProductManager} from "./API/implementations/ProductManager.ts";
import {ProductCard} from "./components/ProductCard/ProductCard.tsx";
import {nanoid} from "nanoid";
import {ProductList} from "./components/ProductList/ProductList.tsx";

export const App = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [singleProduct, setSingleProduct] = useState<IProduct>();
    const pm = new ProductManager();
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await pm.getAllProducts();
                setProducts(data);
            } catch (err: any) {
                const message = err.message ?? 'Unknown error';
                const status = err.status ?? null;
            }
        };

        loadData();
    }, [])

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await pm.getProductById(5);
                setSingleProduct(data);
            } catch (err: any) {
                const message = err.message ?? 'Unknown error';
                const status = err.status ?? null;
            }
        };

        loadData();
    }, [])

    return (
        <ProductList productList={products}/>
    )
}