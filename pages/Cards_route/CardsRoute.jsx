import { Link } from 'react-router-dom';
import './CardsRoute.css';
import { IoLocationOutline } from "react-icons/io5";
import { CgMore } from "react-icons/cg";


export const CardsRoute = ({ imageSrc, description, link }) => {
    return (
       <>
            <Link to={link}>
                <div className='route__card'>
                    <div>
                        <img src={imageSrc} alt='картинка'></img>
                    </div>
                    <div className='route__info'>
                        <p>{description}</p>
                        <div className='route__icon'>
                            <IoLocationOutline size={40} />
                        </div>

                        <div className='route__icon_more'>
                            <CgMore />
                        </div>
                    </div>
                </div>
            </Link>
            </>
         
    );
}