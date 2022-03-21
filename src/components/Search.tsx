import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { SForm } from "./Search.styles";

function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setSearchText(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate(`/searched/${searchText}`);
    },
    []
  );

  return (
    <SForm onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input type="text" value={searchText} onChange={handleSearch} />
      </div>
    </SForm>
  );
}

export default Search;
