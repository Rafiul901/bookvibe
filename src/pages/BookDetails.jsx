import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToStore } from "./addTheBook";

const BookDetails = () => {
  const { id } = useParams();

  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    if (books.length > 0) {
      const found = books.find((b) => b.bookId === parseInt(id));
      setBook(found);
    }
  }, [books, id]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Loading book details...</h2>
      </div>
    );
  }

  
  const handleMarkAs=(id)=>{
addToStore(id)
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Main layout */}
      <div className="grid md:grid-cols-2 gap-10 bg-base-100 shadow-xl rounded-2xl p-6">

        {/* Image */}
        <div className=" overflow-hidden">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-48 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-3xl font-bold mb-2">{book.bookName}</h1>
            <p className="text-gray-500 mb-4">by {book.author}</p>

            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {book.category}
            </span>

            <div className="space-y-2 text-sm text-gray-600">
              <p>📄 Pages: {book.totalPages}</p>
              <p>📅 Published: {book.yearOfPublishing}</p>
              <p>🏢 Publisher: {book.publisher}</p>
              <p>⭐ Rating: {book.rating}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {book.tags?.map((tag, i) => (
                <span key={i} className="badge badge-outline">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={() => handleMarkAs(book.bookId)} className="btn btn-outline btn-sm">Mark as Read</button>
            <button className="btn btn-primary btn-sm">Wishlist</button>
          </div>

        </div>
      </div>

      {/* Review */}
      <div className="mt-10 bg-base-100 shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-3">Review</h2>
        <p className="text-gray-600 leading-relaxed">{book.review}</p>
      </div>

    </div>
  );
};

export default BookDetails;