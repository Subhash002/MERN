import React, { useState } from "react";
import { Icon, Input } from "semantic-ui-react";
import contact from "./Contact";
const SearchBar = () => {
  const [Query, setQuery] = useState("");
  return (
    <div>
      <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <ul>
        {contact
          .filter((i) => i.name.toLowerCase().includes(Query))
          .map((i) => {
            <li key={i.id}>{i.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default SearchBar;
