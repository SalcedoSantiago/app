import {useState,useEffect} from 'react'

const Counter = ({onAdd}) => {

    const [contador,setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        onAdd(contador)
    }

    return (
        <div>
            <p>El contador va : {contador} </p>          
            <button onClick={sumar} className="material-icons">add</button>  
            <button onClick={restar} className="material-icons">remove</button>  
            <button onClick={ confirmar }>confirmar compra</button>
        </div>
    )
}

export default Counter
