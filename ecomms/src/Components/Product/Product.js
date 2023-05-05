import React from 'react'

function Product({ ecomCat }) {

    console.log(ecomCat);

    return (
    <div>{ecomCat.title}</div>
    )
}

export default Product;