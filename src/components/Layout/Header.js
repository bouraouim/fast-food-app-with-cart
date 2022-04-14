import PreviousMap from 'postcss/lib/previous-map';
import mealsImage from'../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=>{



    return(
        <>
             <header className='fixed top-0 left-0 flex items-center justify-between w-full h-1/6 bg-[#f1faee] shadow-lg px-28 z-10'>
                 <h1 className='text-4xl text-[#5680e9] font-extrabold'>Instant Meals</h1>
                 <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className='w-full overflow-hidden h-96'>
                <img src={mealsImage} className='object-cover w-full h-full' alt="meals image" />
            </div>
            
        </>
    )
}

export default Header;