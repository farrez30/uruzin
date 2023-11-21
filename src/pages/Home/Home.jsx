import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/Main/Main'
import Layanan from '../../components/Layanan/Layanan'

const Home = () => {
  return (
    <>
        <div className='flex-col mx-20'>
            <Navbar/>
            <Main/>
            <Layanan/>
        </div>
    </>
  )
}

export default Home