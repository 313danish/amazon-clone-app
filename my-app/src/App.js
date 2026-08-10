import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'

function App() {
  return (
    <div>
      <Header />
      <Card title= {"hoodie"} price= {20} />
      <Card title= {"t-shirt"} price= {15} />
      <Card title= {"jeans"} price= {30} />
      <Footer />
    </div>
  )
}


export default App