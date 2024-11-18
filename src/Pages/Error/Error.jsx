import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <h1 className='error-msg'>Ooops... <i className="fa-regular fa-face-sad-tear"></i></h1>
      <p className="zoom-area">The Page you're looking for isn't here.</p>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">Back to Home</Link>
      </div>
    </div>
  )
}

export default Error