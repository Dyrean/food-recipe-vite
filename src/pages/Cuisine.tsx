import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let { type } = useParams();
  console.log(type);

  useEffect(() => {
    getCuisine(type!).then((data) => setCuisine(data));
  }, [type]);

  const getCuisine = async (name: string) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_SPOONACULAR_KEY
      }&cuisine=${name}`
    ).then((response) => response.json());
    return data.results;
  };

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!!cuisine &&
        cuisine.map((recipe: any) => {
          console.log(recipe.title);
          return (
            <Card key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
              </Link>
            </Card>
          );
        })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
