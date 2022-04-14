import MealItemForm from './MealItemForm'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const MealItem= props =>{
    const cartCtx=useContext(CartContext);
    const price =`$${props.price.toFixed(2)}`;

    const addToCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };
    return(
        <ul>
        <li className="flex justify-between pb-2 m-2 border-t border-gray-50">
            <div>
                <h3 className="pb-4 text-2xl ">{props.name}</h3>
                <div className="italic ">{props.description}</div>
                <div className=" mt-1 font-bold text-[#5680e9] ">{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={ addToCartHandler} />
            </div>
        </li>
        </ul>
    ) 
};
export default MealItem