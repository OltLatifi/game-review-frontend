import React from 'react';
import useFetch from '../hooks/useFetch'
import {useParams} from 'react-router-dom';

function ReviewDetails() {
  const {id} = useParams();
  const {data, error, loading} = useFetch(`http://localhost:1337/api/reviews/${id}`);

  if(loading) return <p>loading</p>
  if(error) return <p>{error}...</p>

  return (
  <div>
    <h1>{data.attributes.title}</h1>
    <div className="rating">{data.attributes.rating}</div>
        <h2>{data.attributes.title}</h2>
        <small>Console list</small>
        <p>{data.attributes.body}</p>
  </div>);
}

export default ReviewDetails;
