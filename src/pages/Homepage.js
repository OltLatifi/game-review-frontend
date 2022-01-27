import React from 'react';
import useFetch from '../hooks/useFetch';
import {Link} from 'react-router-dom';

function Homepage() {
  const {data, error, loading} = useFetch("http://localhost:1337/api/reviews");
  if(loading) return <p>loading</p>
  if(error) return <p>{error}...</p>

  return(
  <div>
    {data.map(review =>{
      return(
        <div key={review.id} className="review-card">
        <div className="rating">{review.attributes.rating}</div>
        <h2>{review.attributes.title}</h2>
        <small>Console list</small>
        <p>{review.attributes.body.substring(0,200)}...</p>
        <Link to={`/details/${review.id}`}>Read more</Link>
      </div>
      )
    })}
  </div>);
}

export default Homepage;
