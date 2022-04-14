

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex items-center justify-between p-4 m-4 border-b-2 border-solid max-h-80">
      <div>
        <h2>{props.name}</h2>
        <div className="flex items-center justify-between w-40">
          <span className="font-bold ">{price}</span>
          <span className="p-2 font-bold border-2 border-solid rounded-md ">x {props.amount}</span>
        </div>
      </div>
      <div className="flex-col">
        <button className="w-12 m-1 ml-4 text-lg font-bold text-center bg-transparent border-2 border-solid rounded-md" onClick={props.onRemove}>−</button>
        <button className="w-12 m-1 ml-4 text-lg font-bold text-center bg-transparent border-2 border-solid rounded-md" onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;