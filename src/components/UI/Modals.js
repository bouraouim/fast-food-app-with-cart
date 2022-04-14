import ReactDOM from "react-dom";
const Backdrop=props=>{
    return <div className="top-0 fixed left-0 w-full h-full z-20 bg-slate-700 opacity-75" onClick={props.onClose}></div>
}

const ModalOverlay=props=>{
    return <div className="top-1/4 fixed left-1/4 w-2/4 bg-white p-2 rounded-lg shadow-xl z-30 ">
        <div className="">{props.children}</div>
    </div>
};

const portalElement=document.getElementById('overlays');

const Modal=props=>{
    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
        {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay> ,portalElement)}
    </>
}
export default Modal;