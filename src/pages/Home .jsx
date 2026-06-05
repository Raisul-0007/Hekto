import React from 'react'
import Header from './../components/Header';
import Banner from './../components/Banner'
import Featured from './../components/Featured'
import Leatest from './../components/Leatest'
import Unique from './../components/Unique'
import Footer from './../components/Footer'
import Navber from './../components/Navber';
const Home  = () => {
  return (
    <div>
      <Header/>
      <Navber/>
      <Banner/>
      <Featured/>
      <Leatest/>
      <Unique/>
      <Footer/>
    </div>
  )
}

export default Home 
