import React from 'react'
import HomeFlier from './HomeFlier'
import Row from './Row'
const Home = () => {
  return (
    <div >
            <HomeFlier/>
            <div className='grid justify-center'>
              <Row category='psychology'/>
              <Row category='Self-Help'
                orderby='relevance'
              />
              <Row category='fiction'/>
              <Row category='drama' orderby='relevance'/>
              <Row category='History' orderby='relevance'/>
              <Row category='poetry'/>
              <Row category='anime'
                  orderby='relevance'/>
            </div>
    </div>
  )
}

export default Home