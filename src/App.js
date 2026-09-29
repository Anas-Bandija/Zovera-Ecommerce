import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/main/Main.jsx'
import Brands from './components/Brands/Brands.jsx'
import NewArrivals from './components/NewArrivals/NewArrivals.jsx'
import TopSelling from './components/TopSelling/TopSelling.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Brands />
      <NewArrivals />
      <TopSelling />
    </div>
  )
}
