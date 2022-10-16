import React from 'react'
import Catalog from './Catalog/Catalog'
import Row from './Row'

const Home = () => {
  return (
    <div>
        <Catalog/>
        <Row  tags='italian'/>
        <Row  tags='french'/>
        <Row  tags='vegetarian'/>
        <Row tags='indian'
        />
        <Row tags='ketogenic'
        />
        <Row tags='dessert'
        />
        
    </div>
  )
}

export default Home