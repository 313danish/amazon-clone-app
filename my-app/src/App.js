import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import Card from './Card'
import './App.css'
import Forms from './Forms'
import Frms from './frms'

function App() {
//  let products = [
//     {id: 101, title: "hoodie", price: 20, stock: 4},
//     {id: 102, title: "t-shirt", price: 15, stock: 5},
//     {id: 103, title: "jeans", price: 3, stock: 10 } 
//   ]


  return (
    <div>
      <Header />
      {/* {products.map((product) => (
        <Card key={product.id} title={product.title} price={product.price} stock={product.stock} />
      ))} */}

      {/* <card title = {"hoodies"}, price = {20} /> */}
        <Forms />
        {/* <frms /> */}
      <Footer />
    </div>
  )
}


export default App