import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    bookId,
    totalPages,
    yearOfPublishing
  } = book;

  return (
    <div className="group relative w-80 rounded-2xl overflow-hidden shadow-lg bg-base-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      
      {/* Image with overlay */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={bookName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 badge badge-warning text-black font-semibold">
          ⭐ {rating}
        </div>

        {/* Title over image */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h2 className="text-lg font-bold leading-tight">
            {bookName}
          </h2>
          <p className="text-xs opacity-80">by {author}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 backdrop-blur-md">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline badge-sm hover:badge-primary transition"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Info */}
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>📚 {totalPages} pages</span>
          <span>📅 {yearOfPublishing}</span>
        </div>

        {/* Category + Button */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
            {category}
          </span>

       <Link className="btn btn-sm btn-primary"  to={`/bookDetails/${bookId}`}>   
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;