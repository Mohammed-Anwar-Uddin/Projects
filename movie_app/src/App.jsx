import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tv from './components/Tv'
import People from './components/People'

const App = () => {
  return (
    <div className='h-screen w-screen bg-[#1f1e24] flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/people' element={<People />} />
      </Routes>
    </div>
  )
}

export default App