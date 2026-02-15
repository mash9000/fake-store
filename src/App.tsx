import {useEffect, useState} from "react";
import type {IProduct} from "./business-logic/IProduct.ts";
import {ProductManager} from "./API/implementations/ProductManager.ts";
import {ProductList} from "./components/ProductList/ProductList.tsx";
import {
    ErrorNotification
} from "./components/ErrorNotification/ErrorNotification.tsx";

export const App = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [errorNotification, setErrorNotification] = useState<string>();
    const pm = new ProductManager();
    const loadData = async () => {
        try {
            const data = await pm.getAllProducts();
            setProducts(data);
        } catch (err: any) {
            const message = err.message ?? 'Unknown error';
            const status = err.status ? `${err.staus}: ` : null;
            setErrorNotification(`${status ?? ''}${message}`);
        }
    };
    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <ProductList productList={products}/>
            {errorNotification && (
                <ErrorNotification message={errorNotification}
                                   executeFunction={loadData}/>)}
        </>
    )
}