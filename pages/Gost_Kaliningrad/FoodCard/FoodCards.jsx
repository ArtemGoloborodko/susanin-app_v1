import { TbWorld } from "react-icons/tb";
import { RiMapPinRangeFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import routesData from '../../../data/routes_1.json';
import './FoodCards.css';
import { DownMenu } from "../../../components/DownMenu";
import { MdAccessTime } from "react-icons/md";
import AOS from 'aos';
import { useEffect } from "react";


export const FoodCardsKld = ({ imageSrc, title, description, site, adress, adressLink, tel, telLink, timeWork }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return (
        <>

            <div className='food__card'  data-aos="fade-up">
                <div>
                    <img src={imageSrc} alt='картинка'></img>
                </div>
                <div className='food__info'>
                    <h2 className="food__info_title">{title}</h2>
                    <p className="food__info_discription">{description}</p>
                    <div className="food__info_links">
                        <a href={adressLink} target='_blank'><RiMapPinRangeFill size={30} />{adress}</a>
                        <a href={telLink}><FaPhoneAlt size={25} />{tel}</a>
                        <a href={site} target='_blank'><TbWorld size={30} />Сайт</a>
                        <a><MdAccessTime size={30} />{timeWork}</a>
                    </div>
                </div>
            </div>

            {routesData.map((route, index) => (
                <DownMenu
                    key={index}
                    mapName="map_1"
                    marklist={route.marklist}
                    spotFoot={route.spotFoot}
                />
            ))}

        </>

    );
}