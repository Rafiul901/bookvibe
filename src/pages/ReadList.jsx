import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from './addTheBook';
import Book from './Book';

const ReadList = () => {
    const [readlist,setreadlist]= useState([]);

    const data =useLoaderData();
    console.log(data);

    useEffect(()=>{
        const storeBookData = getStoredBook()
        const converdBooks = storeBookData.map(id =>parseInt(id));
        const myRead =data.filter(book => converdBooks.includes(book.bookId));
        setreadlist(myRead)

    },[])
    return (
        <div className='max-w-6xl mx-auto'>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Read List" />
  <div className="tab-content bg-base-100 border-base-300 p-6">{
    readlist.map(b=><Book key={b.bookId} book={b}></Book>)}</div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Wish List" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"></div>

</div>
        </div>
    );
};

export default ReadList;