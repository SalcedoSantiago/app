import React, { useState, useEffect } from 'react'
import { dataJson } from "../api/navigation";
import { Product } from './Product'
import { Spinner } from '../utils/Spinner'
import '../Product.scss'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    const promise = new Promise((res, rej) => {
        res(dataJson)
    })

    useEffect(() => {
        setLoad(true);

        promise.then((dataJson) => {
            setTimeout(() => {
                setProducts(dataJson);
                setLoad(false)
            }, 1000);
        }).catch(() => {
            console.log('Error');
        })
    }, [])


    return (
        <div className="container-flex">
            {load ?
                (
                    <Spinner />
                ) :
                products.map((product, index) => (
                    <Product
                        data={product}
                        key={index}
                    />
                ))
            }
        </div>
    )
}
