import React, { useState } from 'react';
import Books from './Books';


const Home = () => {
    const [allBooks,setBooks]= useState([]);
    const bookPr = async()=>{
    const res = await fetch('./bookData.json');
    const data =await res.json();
    setBooks(data)
       console.log(data);
    }
 
    return (
        <div>
         <button onClick={bookPr} className='btn btn-primary'>Load ALL</button>
          <Books allBooks={allBooks}></Books>
        </div>
    );
};

export default Home;