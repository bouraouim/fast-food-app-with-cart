const Card= props =>{ 
  const  width=props.width;
    console.log(width);
    return(
        <div className={`w-${props.width} p-2 shadow-md bg-white rounded-md`}>{props.children}</div>
    )
}
export default Card;