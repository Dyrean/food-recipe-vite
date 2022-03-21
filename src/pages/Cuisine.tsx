import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Card } from "../components/RecipeCard.styles";
import { Grid } from "../components/RecipeGrid.styles";
import { getCuisine } from "../utils/getCuisine";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let { type } = useParams();
  console.log(type);

  useEffect(() => {
    getCuisine(type!).then((data) => setCuisine(data));
  }, [type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!!cuisine &&
        cuisine.map((recipe: any) => {
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
