import { createContext, useState } from "react";

export const contexto = createContext()

export const { Provider } = contexto

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addProduct = (cantidad, producto) => {
        console.log('producto', producto);
        const nuevoProducto = { cantidad, producto }
        const copia = [...cart]
        copia.push(nuevoProducto)
        setCart(copia)
    }


    const isInCart = () => {
        //aca va la logica de fijarte si el producto esta en el carrito o no y en tal caso retornar true o false
    }

    const borrarProducto = (producto) => {
        let { id } = producto;
        setCart(cart.filter((item) => item.producto.id != id))
    }

    const vaciarAll = () => {
        setCart([])
    }

    const valor_de_contexto = {
        cart: cart,
        addProduct: addProduct,
        borrarProducto: borrarProducto,
        vaciarAll: vaciarAll
    }

    return (
        <Provider value={valor_de_contexto}>
            {children}
        </Provider>
    )
}

