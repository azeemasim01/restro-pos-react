import React from 'react'
import Greetings from '../components/home/Greetings'
import PopularDishes from '../components/home/PopularDishes'

const Home = () => {
  return (    
    <section className='bg-[#1f1f1f] h-screen md:flex gap-3'>
      {/* left div */}
      <div className='md:flex-[3] bg-[#333] p-5 '>
        <Greetings />
      </div>
      {/* right div */}
      <div className="md:flex-[2] bg-[#333]">
        <PopularDishes />
      </div>
    </section>
  )
}

export default Home