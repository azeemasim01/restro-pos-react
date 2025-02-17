import React from 'react'
import Greetings from '../components/home/Greetings'

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      {/* left div */}
      <div className='flex flex-[3] border-1 border-black p-3'>
        <Greetings />
      </div>
      {/* right div */}
      <div className='flex flex-[2] border-1 border-black p-3'>
        <h1>Right div</h1>
      </div>

    </section>
  )
}

export default Home