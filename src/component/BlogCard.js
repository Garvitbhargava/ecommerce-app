import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = () => {
  return (
    
        <div className="blog-card">
            <div className='card-image'>
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>5 March, 2023</p>
                <h5 className='title'>A beautiful sunday morning renaissance</h5>
                <p className='desc'>You're Only As Good As Your Last Collection,Which is an
                Enormous Pressure.I Think There is Something About...</p>
                <Link to="/blog/:id" className='button'>Read More</Link>
            </div>
        </div>
    
  )
}

export default BlogCard