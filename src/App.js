
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import {useState} from 'react';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';
import Search from './components/Search';


function App() {

  const [food, setFood] = useState(foods)

  const addFoodHandler = (singleFood) =>{
    const foodMod = [...food, singleFood];
    setFood(foodMod);
  }

  const searchFoodHandler = (singleFood) =>{
    const foodMod = [...food];
    console.log(foodMod)

    const filteredFood = foodMod.filter(element => {
      if (singleFood.length < 1) {
        return foodMod }
      else {
        return element.name.toLowerCase().includes(singleFood.toLowerCase())
      }
    }) 
    console.log(filteredFood)
    setFood(filteredFood) 
  }

  const deleteFood = (foodName)=>{
    const foodArr = food.filter(food => {
        return food.name !== foodName;
    })
    setFood(foodArr);
}

  return (

    <div className="App">
      <AddFoodForm addFood={addFoodHandler}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search searchFood={searchFoodHandler}/>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map(food => <FoodBox food= {food} deleteHandlerProps={deleteFood}/> )}
      </Row>
    </div>
  );
}

export default App;
