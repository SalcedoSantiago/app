import { useContext } from "react"
import { contexto } from "./cartContext"

const Cart = () => {

    const { cart, borrarProducto, vaciarAll } = useContext(contexto)
    const deleteItem = (item) => {
        borrarProducto(item)
    }

    const vaciar = () => {
        vaciarAll()
    }

    return (
        <div>
            Soy el carrito
            {cart.map(item => {
                return (
                    <article key={item.cantidad}>
                        <h3>{item.producto.title}</h3>
                        <p>Total : ${item.producto.price * item.cantidad} (Cant : {item.cantidad})</p>
                        <button onClick={() => deleteItem(item.producto)} >borrar</button>
                    </article>
                )
            })}
            {cart.length > 0 && (
                <button onClick={() => vaciar()} >Vaciar</button>
            )}
        </div>
    )
}

export default Cart
