import { useContext } from "react";
import Modal from "../UI/Modals"; 
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart=(props)=>{
    const cartCtx=useContext(CartContext);

    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;

    const cartItemRemoveHandler= id=>{
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler= item=>{
        cartCtx.addItem(item);
    };

    const cartItems=(
        <ul >
            {cartCtx.items.map((item)=>(
                <CartItem onAdd={cartItemAddHandler.bind(null,item.id)} onRemove={cartItemRemoveHandler.bind(null,item.id)} key={item.id} name={item.name} amount={item.amount} price={item.price}/>
            ))}
        </ul>
    );

    return(
        <Modal onClose={props.onClose}>
        <div className="overflow-x-scroll font-bold max-h-80 ">
            {cartItems}
            <div className="flex items-center justify-between text-lg font-bold ">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
        </div>
        <div className="text-lg text-right ">
            <button className="rounded-xl py-1 px-4 bg-[#a8dadc] hover:bg-[#457b9d] transition duration-500 " onClick={props.onClose}>Close</button>
            {hasItems && <button className="ml-2 bg-[#a8dadc] py-1 px-4 rounded-xl hover:bg-[#457b9d] transition duration-500">order</button>}
        </div>
        </Modal>

    )
}

export default Cart;