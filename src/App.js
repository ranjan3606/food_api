import React, {useState, useEffect} from 'react';

import Header from './components/Header'
import Recipes from './components/Recipes'
import Axios from 'axios'


function App() {

  const [search, setSearch] = useState("chiken")
  const [recipes,setRecipes] = useState([])

  const APP_ID = "f328a91f";
  const APP_KEY = "b4a78d61deecbf8eecfeb87acbe279c8	";

useEffect(async () => {
  getRecipes()
}, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    setRecipes(res.data.hits)
  };

  const onInputChange = e => {
    setSearch(e.target.value)
  }

const onSearch = () => {
  getRecipes();
}

  return (
    <div className="App">
      <Header 
        search={search} 
        onInputChange={onInputChange} 
        onSearch={onSearch}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
