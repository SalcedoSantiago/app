import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from '../utils/Spinner'
import { dataJson } from "../api/navigation";
import { Product } from './Product'

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
        let productActual = dataJson.filter((product) => product.id === parseInt(id))[0];
        setProduct(productActual)
        setLoad(false)
      }, 1000);
    }).catch(() => {
      console.log('Error');
    })
  }, [])

  return (
    <div className="">
      {load ?
        (
          <Spinner />
        ) :
        (

          <div className="product-single">
            <Product
              data={product}
            />
          </div>
        )
      }
    </div >
  );
};

export default SingleProduct;
