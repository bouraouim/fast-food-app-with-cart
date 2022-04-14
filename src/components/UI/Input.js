import React from "react";
const Input=React.forwardRef((props, ref)=>{
    return(
        <div className="flex items-center gap-2 my-2 mb-1 ">
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} className="font-bold border-[#5680e9] rounded-md text-center border-2 border-solid "  {...props.input} />
        </div>
    )
});

export default Input;