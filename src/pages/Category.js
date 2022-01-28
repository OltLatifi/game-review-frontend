import React from 'react';
import { useQuery, gql } from "@apollo/client";
import {useParams} from 'react-router-dom'

const CATEGORY = gql`
query getCategory($id: ID!){
  category(id: $id){
    data{
      id,
      attributes{
        name,
        reviews{
          data{
            id,
            attributes{
              title,
              rating,
              body,
              categories{
                data{
                  id,
                  attributes{
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

function Category() {
  const {id} = useParams()
  console.log(id)
  const {data, error, loading} = useQuery(CATEGORY, {
    variables:{
      id:id
    }
  });
  if(loading) return <p>loading</p>
  if(error) return <p>{error}...</p>

  const deconstructedData = data.category.data;
  const name = deconstructedData.attributes.name;
  const reviews = deconstructedData.attributes.reviews.data;

  // console.log(reviews)
  // console.log(review.attributes.title)

  return (
    <div>
      <h2>{name}</h2>
      {reviews.map(review =>{
        return(
          <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          {review.attributes.categories.data.map(category=>{
            return(
              <small>{category.attributes.name}</small>
            )
          })}
          <p>{review.attributes.body.substring(0,200)}...</p>
          <a href={`/details/${review.id}`}>Read more</a>
        </div>
        )
        })
      }
  </div>);
}

export default Category;
