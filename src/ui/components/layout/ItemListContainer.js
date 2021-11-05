import React, { useState, useEffect } from 'react'
import { dataJson } from "../api/navigation";
import { Product } from './Product'
import { Spinner } from '../utils/Spinner'
import { Link } from "react-router-dom";
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
        <div className="products">
            <div className="container-flex">
                {load ?
                    (
                        <Spinner />
                    ) :
                    products.map((product, index) => (
                        <Link className="link_product" to={`/product/${product.id}`}>
                            <Product
                                data={product}
                                key={index}
                            />
                        </Link >

                    ))
                }
            </div>
        </div>
    )
}
