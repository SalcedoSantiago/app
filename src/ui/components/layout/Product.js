import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

export const Product = ({ data }) => {
    const { img, title, description, stock, id } = data;

    const [count, setCount] = useState(0)

    const addProductCart = () => {
        if (count >= 0 && count < stock) {
            setCount(count + 1)
        }
    }

    const removeProductCart = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }


    return (
            <div className="product">
                <Link to={`/product/${id}`}>
                    <img loading="lazy" className="img-thumbnail" src={img} alt={title} />
                    <div>
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                    <div className="stock">
                        <p>Stock: {stock}</p>
                        <div className="counter">
                            <p>{count}</p>
                            <div className="count">
                                <button className="btn btn-danger" onClick={() => { removeProductCart() }}>-</button>
                                <button className="btn  btn-success" onClick={() => { addProductCart() }}>+</button>
                            </div>
                        </div>

                    </div>
                </Link>
            </div >
    )
}
