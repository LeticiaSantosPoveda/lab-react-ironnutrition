import { Divider, Input } from 'antd';
import {useState} from 'react';

// Iteration 5
function Search({searchFood}) {

    const [query, setQuery] = useState("")
 
    const searchFoodBar = (e) => {
        setQuery(e.target.value) // renderiza lo que escribo en search

       return searchFood(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor='search'>Search</label>
      <Input placeholder="search your food" value={query} type="text" onChange={searchFoodBar} />
    </>
  );
}

export default Search;