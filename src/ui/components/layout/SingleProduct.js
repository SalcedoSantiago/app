import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from '../utils/Spinner'
import { dataJson } from "../api/navigation";
import './SingleProduct.scss'

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const promise = new Promise((res, rej) => {
    res(dataJson)
  })

  useEffect(() => {
    setLoad(true);

    promise.then((dataJson) => {
      setTimeout(() => {
        let productActual = dataJson.filter((product) => product.id == parseInt(id))[0];
        setProduct(productActual)
        setLoad(false)
      }, 1000);
    }).catch(() => {
      console.log('Error');
    })
  }, [])

  const [count, setCount] = useState(0)

  const addProductCart = () => {
    if (count >= 0 && count < product.stock) {
      setCount(count + 1)
    }
  }

  const removeProductCart = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="">
      {load ?
        (
          <Spinner />
        ) :
        (

          <div className="product-single">
            <div>
              <img loading="lazy" className="img-thumbnail" src={`.${product.img}`} alt={product.title} />
            </div>
            <div>
              <div>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
              </div>
              <div className="stock">
                <p>Stock: {product.stock}</p>
                <div className="counter">
                  <p>{count}</p>
                  <div className="count">
                    <button className="btn btn-danger" onClick={() => { removeProductCart() }}>-</button>
                    <button className="btn  btn-success" onClick={() => { addProductCart() }}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default SingleProduct;
