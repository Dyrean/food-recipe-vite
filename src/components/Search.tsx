import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/searched/${searchText}`);
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input type="text" value={searchText} onChange={handleSearch} />
      </div>
    </SForm>
  );
}

const SForm = styled.form`
  margin: 0rem 15rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(45deg, #505050, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
