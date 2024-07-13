import { TbArrowBigLeft } from "react-icons/tb"
import { Link, useNavigate } from "react-router-dom"
import { ToggleRouteButton } from "./ToggleRouteButton"
import { FaMapMarkedAlt } from "react-icons/fa"
import { IoFastFoodOutline } from "react-icons/io5"
import { IoHomeOutline } from "react-icons/io5";

export const DownMenu = ({mapName, marklist, spotFoot}) => {
 
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1); // Переход на предыдущую страницу в истории браузера
    };  
    return (
        <>
            <div className="down__block">
            <div className="down__blocks border_right">
                    <Link to='/maps'><IoHomeOutline size={30} color="#000" /></Link>
                </div>

                <div className="down__blocks border_right">
                    <TbArrowBigLeft size={30} color="#000" onClick={goBack}/>
                </div>
                <div className="down__blocks border_right">
                    <ToggleRouteButton mapName={mapName} size={30} />
                </div>
                <div className="down__blocks border_right">
                    <Link to={marklist}><FaMapMarkedAlt size={30} color="#000" /></Link>
                </div>
                <div className="down__blocks">
                    <Link to={spotFoot}><IoFastFoodOutline size={30} color="#000" /></Link>
                </div>
            </div>
        </>
    )
}