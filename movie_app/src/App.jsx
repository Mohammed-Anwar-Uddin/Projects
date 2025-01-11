import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tv from './components/Tv'
import People from './components/People'
import TvDetails from './components/TvDetails'
import MovieDetails from './components/MovieDetails'
import PersonDetails from './components/PersonDetails'

const App = () => {
  return (
    <div className='h-screen w-screen bg-[#1f1e24] flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/details/:id' element={<MovieDetails />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/tv/details/:id' element={<TvDetails />} />
        <Route path='/person' element={<People />} />
        <Route path='/person/details/:id' element={<PersonDetails />} />
      </Routes>
    </div>
  )
}

export default App