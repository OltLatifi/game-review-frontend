import React from 'react';
import { useQuery, gql } from "@apollo/client";
import {useParams} from 'react-router-dom';

const REVIEWS = gql`
  query GetReviews($id: ID!){
    review(id: $id){
      data{
        id,
        attributes{
          title,
          body,
          rating
        }
      }
    }
  }
`

function ReviewDetails() {
  const {id} = useParams();
  const {data, error, loading} = useQuery(REVIEWS, {
    variables:{
      id:id
    }
  });
  
  if(loading) return <p>loading</p>
  if(error) return <p>{error}...</p>

  // the line refrencing the data should be after loading=false, after the api stopped fetching
  const deconstructedData = data.review.data.attributes;
  return (
  <div className="review-card">
    <div className="rating">{deconstructedData.rating}</div>
    <h2>{deconstructedData.title}</h2>
    <small>Console list</small>
    <p>{deconstructedData.body}</p>
  </div>);
}

export default ReviewDetails;
