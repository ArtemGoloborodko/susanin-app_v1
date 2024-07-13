import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swipers } from "../../Swiper/Swipers";
import '/style/cardRoute.css';
import { RiCloseLargeFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DownMenu } from "../../../components/DownMenu";
import routesData from '../../../data/routes_1.json';

export const CardRouteKld = ({ nameObject, history, maps, swiperImages }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <>
      <div className="card__route_block" data-aos="fade-up">
        <div className="card__route_info">
          <h2>{nameObject}</h2>
          <p className="object__histori" dangerouslySetInnerHTML={{ __html: history }}></p>
        </div>

        < Swipers images={swiperImages} />

        <div className="close__btn">
          <Link to={maps}>
            <RiCloseLargeFill size={20} color="#000000" />
          </Link>
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
};
