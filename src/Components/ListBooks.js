import React from 'react'
import { Link } from 'react-router-dom';

import Nav from './Nav';

import imgObj from '../Helpers/images';
import renderedBooks from '../Helpers/library';

function ListBooks({moody}) {

  const moodBooks = renderedBooks.filter(book => book.mood.includes(moody))
  const idList = moodBooks.map(book => book.book_id)
  const randomId = idList[Math.floor(Math.random()*idList.length)];
  const theChosenBook = moodBooks.find(book => book.book_id === randomId);
  const chosenImage = imgObj[theChosenBook.book_id].fileName;

  console.log("CHOSEN", theChosenBook)

  return (
    <div className="div--wrapper">
      <Nav />
      <div className="intro--container book-div">
        <div className="inner--div">
          <div className="img-div">
            <img src={chosenImage} alt={theChosenBook.title} />
          </div>
        <span className="book-span">If you're feeling {moody},</span><br></br>
        <span className="book-span">We recommend..</span>
        <h1>{theChosenBook.title}</h1>
        <h4>{theChosenBook.author}, {theChosenBook.year}</h4>
        <p>{theChosenBook.description}</p>
        <Link to="/categories"><button className="b-main b-cat">Try Again</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ListBooks