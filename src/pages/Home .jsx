import React from 'react'
import Header from './../components/Header';
import Banner from './../components/Banner'
import Featured from './../components/Featured'
import Leatest from './../components/Leatest'
import Unique from './../components/Unique'
import Footer from './../components/Footer'
import Navber from './../components/Navber';
import Best from '../components/Best';
const Home  = () => {
  return (
    <div>
       window.scrollTo(0, 0)
      <Banner/>
      <Featured/>
      <Leatest/>
      <Unique/>
      <Best/>
    </div>
  )
}

export default Home 
