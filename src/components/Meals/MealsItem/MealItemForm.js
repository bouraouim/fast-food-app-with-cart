import Input from "../../UI/Input";
import { useRef ,useState } from "react";

const MealItemForm=(props ) =>{
    const[amountIsValid, setAmountIsValid]=useState(true);
    const amountInputRef=useRef();
    const submitHandler=event=>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;

        if(
            enteredAmount.trim().length===0||
            enteredAmountNumber>5||
            enteredAmountNumber<1
        ){
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    return(
        <form className="text-right " onSubmit={submitHandler}>
            <Input ref={amountInputRef}
            label="Amount" input={{
                id: 'amount',
                type: 'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }} />
            <button className=" font-bold  rounded-md px-8 bg-[#a8dadc]  hover:bg-[#457b9d] transition duration-500 mr-3 text-[#5680e9]  py-1">+ add</button>
            {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
        </form>
    )
}
export default MealItemForm;