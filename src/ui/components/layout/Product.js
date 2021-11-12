import React from 'react'
import { useState, useContext } from 'react'
import Counter from './Counter';
import { contexto } from "./cartContext"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Product = ({ data }) => {
    const { img, title, description, stock, id } = data;
    const navigate = useNavigate()

    const [show, setShow] = useState(false)
    const { addProduct } = useContext(contexto)


    const onAdd = (cantidad) => {
        addProduct(cantidad, data);
        setShow(!show)
    }

    const redireccionar = () => {
        navigate("/cart")
    }

    return (
        <div className="product">
            <Link className="link_product" to={`/product/${id}`}>
                <img loading="lazy" className="img-thumbnail" src={img} alt={title} />
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </Link>

            <div className="stock">
                <Counter onAdd={onAdd} />
                {show && <button onClick={redireccionar}>ver carrito</button>}
            </div>

        </div >
    )
}
