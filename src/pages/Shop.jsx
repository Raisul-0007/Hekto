import React from 'react'
import Container from './../components/Container';
import Filter from '../components/Filter';

const Shop = () => {
  return (
    <div>
      <Container>
        <h2 className="text-4xl font-bold py-10">Shop</h2>
        <div className="flex gap-10">
          <div className="w-1/4">
            <Filter/>
          </div>
          <div className="w-3/4"></div>
        </div>
      </Container>
    </div>
  )
}

export default Shop
