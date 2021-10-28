import React, { useState, useEffect } from 'react'

export const ItemList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {


        fecth("http://miservidor.com/recurso")
            .then((response) => {
                return response.json();
            })
            .then((recurso) => {
                console.log(recurso);
            });


    }, [])


    return (
        <div className="products">



        </div>
    )
}
