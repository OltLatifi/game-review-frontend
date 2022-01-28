import React from 'react';
// import useFetch from '../hooks/useFetch';
import {Link} from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";


const REVIEWS = gql`
query GetReviews{
  reviews{
    data{
      id,
      attributes{
        title,
        body,
        rating,
        categories{
          data{
            attributes{
              name
            }
          }
        }
      }
    }
  }
}
`

function Homepage() {
  // const {data, error, loading} = useFetch("http://localhost:1337/api/reviews");
  const {data, error, loading} = useQuery(REVIEWS);
  if(loading) return <p>loading</p>
  if(error) return <p>{error}...</p>
  const deconstructedData = data.reviews.data

  return(
  <div>
    {deconstructedData.map(review =>{
      return(
        <div key={review.id} className="review-card">
        <div className="rating">{review.attributes.rating}</div>
        <h2>{review.attributes.title}</h2>

        {review.attributes.categories.data.map(review=>{
            return(
              <small>{review.attributes.name}</small>
            )
          })}
        
        <p>{review.attributes.body.substring(0,200)}...</p>
        <Link to={`/details/${review.id}`}>Read more</Link>
      </div>
      )
    })}
  </div>);
}

export default Homepage;
