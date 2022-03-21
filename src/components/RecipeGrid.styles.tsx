import { motion } from "framer-motion";
import styled from "styled-components";

export const Grid = styled(motion.div)`
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;
