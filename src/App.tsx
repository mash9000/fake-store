import {useEffect, useState} from "react";
import type {IProduct} from "./business-logic/IProduct.ts";
import {ProductManager} from "./API/implementations/ProductManager.ts";

export const App = () => {
    const [errorNotification, setErrorNotification] = useState<string | null>(null);
    const [products, setProducts] = useState<IProduct[]>([]);
    const pm = new ProductManager();
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await pm.getAllProducts();
                setProducts(data);
            } catch (err: any) {
                const message = err.message ?? 'Unknown error';
                const status = err.status ?? null;
                setErrorNotification(status ? `${message} (code ${status})` : message);
            }
        };

        loadData();
    }, [])

    const [singleProduct, setSingleProduct] = useState<IProduct>();
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await pm.getProductById(3535937539);
                setSingleProduct(data);
            } catch (err: any) {
                const message = err.message ?? 'Unknown error';
                const status = err.status ?? null;
                setErrorNotification(status ? `${message} (code ${status})` : message);
            }
        };

        loadData();
    }, [])

    return (
        <>
            {
                products.map((p) => (<p key={p.getId()}>{p.getTitle()}</p>))
            }
            <h1>{singleProduct?.getTitle()}</h1>
            {errorNotification !== null && (
                <strong>{errorNotification}</strong>)}
        </>
    )
}