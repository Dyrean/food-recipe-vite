import { motion } from "framer-motion";
import styled from "styled-components";

export const RecipeWrapper = styled(motion.div)`
  margin: 4rem 0rem;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  .active {
    background: linear-gradient(45deg, #505050, #313131);
    color: white;
  }

  h3 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }

  ul {
    margin-top: 2rem;
  }
`;
