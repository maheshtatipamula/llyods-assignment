import React, {useEffect, useState} from 'react'

import axios from 'axios'
import './index.css'

const SideBar = () => {
  const [prodData, setProdData] = useState()

  const handleProducts = prods => {
    console.log(prods)
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
  console.log(prodData)
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="side-main">
      {prodData &&
        prodData.map(prods => (
          <div className="cateogry">
            <p onClick={handleProducts(prods)}>{prods.name} </p>
          </div>
        ))}
    </div>
  )
}

export default SideBar
