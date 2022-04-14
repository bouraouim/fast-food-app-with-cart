import Card from '../UI/Cards'
import MealItem from './MealsItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailableMeals=()=>{
      const mealsList = DUMMY_MEALS.map((meal)=> <li id={meal.id} key={Math.random()}><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} /></li>)
    const width="3/4";
    return(
         <div className="flex justify-center w-full mx-auto mt-10 mb-10">
             <Card width={width} >
             <ul className=''>
                 {mealsList}
             </ul>
             </Card>
         </div>
         );
  }
  export default AvailableMeals;