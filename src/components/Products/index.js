import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'

import './index.css'

const Product = () => {
  const [prodData, setProdData] = useState()

  const handleSubmit = product => {
    console.log(product)
  }
  const getData = async () => {
    // const {setProdData} = useContext(Context(setProdData))
    // const {prodData} = Context()
    console.log('hi')
    try {
      const response = await axios(
        'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
      )

      const data = response.data.categories
      setProdData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="products-main">
      {prodData &&
        prodData.map(prods => (
          <div className="cateogry" key={prods.name}>
            <h1>{prods.name} </h1>
            <div className="outer">
              {prods &&
                prods.products.map(product => (
                  <div className="inner" key={product.id}>
                    <img src={product.image} alt="product" />
                    <p>{product.price}</p>
                    <p>{product.name}</p>
                    <p>{product.weight}</p>
                    <button onClick={handleSubmit(product)} className="but">
                      add to cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  )
}
export default Product
