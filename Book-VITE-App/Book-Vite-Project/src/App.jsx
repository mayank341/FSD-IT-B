import React from 'react'
import Header from './assets/components/Header.jsx'
import Book from './assets/components/Book.jsx'
import './App.css'  // Import global styles

const App = () => {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />

      {/* Book Cards Section */}
      <div className="card-container">
        <Book />
        <Book />
        <Book />
      </div>
    </>
  )
}

export default App
