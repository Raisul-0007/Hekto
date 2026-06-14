import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
    let {productId} = useParams()
    let [product, setProduct] = useState([])
    let singleProduct = ()=>{
        axios.get(`https://dummyjson.com/products/${productId}`).then((response)=>{
            setProduct(response.data)
        })
    }
    
    console.log(product);
    
    useEffect(()=>{
        singleProduct()
    },[])
  return (
    <div>
      <Container>
        ProductDetails
      </Container>
    </div>
  )
}

export default ProductDetails
