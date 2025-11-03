import React from 'react'
import './Book.css'

const Book = () => {

    const addtocart=()=>{
        alert("succesfully added to cart")
    }
  return (
    <div className='card'>
        <img src="book.png" width={200} height={200} alt='image' />
        <h3>Title: physics</h3>
        <h4>Price: 299</h4>
        <button onClick={addtocart}>Add to Cart</button>
      
    </div>
  )
}

export default Book
