import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="bg-purple-400 text-center p-4 rounded-xl">Online Store</h2>
        <Card heading="Clothes" cardBody="Explore the wide ranges of cloth for men, women and kids." btnText="Explore more!"/>
        <Card heading="Electronics" cardBody="Explore the different electronic products for your home." btnText="Explore now!"/>
      </div>
    </>
  )
}

export default App
