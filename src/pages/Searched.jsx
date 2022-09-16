import React from 'react';
import { useEffect , useState } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Searched = () => {

  const [searchedRecipes , setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearchedRecipes = async (name) => {

    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
       const recipes = await data.json();
       setSearchedRecipes(recipes.results);
       
  }
  

  useEffect(() => {
    getSearchedRecipes(params.search)
    
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <div key={item.id}>
          <Link to={"/recipe/" + item.id}>
          <Card>
            <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
          </Card>
          </Link>
          </div>
        
          
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
 display : grid;
 grid-template-columns:repeat(auto-fit, minmax(20rem , 1fr));
 gap:3rem;
 
`;

const Card = styled.div`
 img {
  width:100%;
  border-radius:2rem;
 }
 a{
  text-decoration:none
 }
 h4 {
  text-align:center;
  padding:1rem;
 }
`;

export default Searched