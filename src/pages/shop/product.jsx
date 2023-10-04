import React from 'react'


export const product = (props) => {
    const { id, productName, price, productImage } = props.data;
    return (
        <div>{productName}</div>
    )
}