import React from 'react';
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`

function Header() {
  const {data, error, loading} = useQuery(CATEGORIES);

  if(loading) return <p>loading</p>
  if(error) return <p>{error}...</p>

  const deconstructedData = data.categories.data;
  return (
  <div className="site-header">
    <a href="/"><h1>Game reviews</h1></a>
    <nav className="categories">
      <span>Filter reviews by game consoles</span>
      {deconstructedData.map(category => {return(
        <a href={`/category/${category.id}`} key={category.id}><h1>{category.attributes.name}</h1></a>
      )})}
    </nav>
  </div>);
}

export default Header;
