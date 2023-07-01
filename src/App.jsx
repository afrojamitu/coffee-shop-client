import React, { useState } from 'react'
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import Coffee from './coffee'
import Header from './Components/Shared/Header'
import { FaCoffee } from 'react-icons/fa'
import Footer from './Components/Shared/Footer'
import FollowInstagram from './Components/FollowInstagram'

function App() {

  const loadedCofees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCofees)

  return (
    <div>
      <Header></Header>
      <div className='banner-bg'>
        <div className='w-9/12 mx-auto pt-40'>
          <h2 className='text-5xl font-bold text-white mb-4'>Would you like a Cup <br />of Delicious Coffee?</h2>
          <p className='text-white mb-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br />Your companion of every moment!!! Enjoy the beautiful moments and <br></br>make them memorable.</p>
          <button className='bg-[#D2B48C] hover:bg-transparent hover:text-white font-bold border-2 border-[#D2B48C] px-3 py-2' style={{ transition: '.5s' }} >Learn More</button>
        </div>
      </div>


      <div className='bg-[#ECEAE3]'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 p-8 md:w-9/12 mx-auto'>
          <div className='space-y-3'>
            <img className='w-12' src="https://i.ibb.co/x6qmB5s/1.png" />
            <h3 className='text-xl font-bold'>Awesome Aroma</h3>
            <p>You will definitely be a fan of the design & aroma of your coffee</p>
          </div>
          <div className='space-y-3'>
            <img className='w-12' src="https://i.ibb.co/7Vz8GsT/2.png" />
            <h3 className='text-xl font-bold'>High Quality</h3>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div className='space-y-3'>
            <img className='w-12' src="https://i.ibb.co/qRmGZJ9/3.png" />
            <h3 className='text-xl font-bold'>Pure Grades</h3>
            <p>The coffee is made of the green coffee beans which you will love</p>
          </div>
          <div className='space-y-3'>
            <img className='w-12' src="https://i.ibb.co/1dbDCzY/4.png" />
            <h3 className='text-xl font-bold'>Proper Roasting</h3>
            <p>Your coffee is brewed by first roasting the green coffee beans</p>
          </div>
        </div>
      </div>

      <div className='w-9/12 mx-auto flex flex-col items-center gap-3 my-8'>
        <h3 className='text-4xl font-bold'>Our Popular Products</h3>
        <Link to='/addCoffee' className='bg-[#D2B48C] hover:bg-transparent rounded font-bold border-2 border-[#D2B48C] px-3 py-2 flex items-center gap-2' style={{ transition: '.5s' }} >Add Coffee <FaCoffee /></Link>
      </div>


      <div className='transparent-left-bg'>
        <div className='w-9/12 mx-auto grid md:grid-cols-2 gap-10 mb-12'>
          {
            loadedCofees.map(coffee => <Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee>)
          }
        </div>
      </div>

      <FollowInstagram></FollowInstagram>

      <Footer></Footer>
    </div>
  )
}

export default App
