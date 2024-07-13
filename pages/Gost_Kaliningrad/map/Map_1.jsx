import { MapInfo } from "./MapInfo";
import "/style/Map.css";
import routesData from '../../../data/routes_1.json';
import { DownMenu } from "../../../components/DownMenu";
import { useEffect } from "react";
import AOS from 'aos';
import { CardsRoute } from "../../Cards_route/CardsRoute";

export const Map_1 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div className="block__route" data-aos-easing="linear">
            <div>
                <h1>Ваш маршрут от гостиницы Калининград</h1>
                <MapInfo mapName="map_1" />
            </div>

            <div className="grid__route" data-aos="fade-up">
                {routesData.map((route, index) => (
                    <CardsRoute
                        key={index}
                        imageSrc={route.imageSrc}
                        description={route.description}
                        link={route.link}
                        swiperImages={route.swiper_img}
                    />
                ))}
            </div>

          {/*  <DownMenu mapName={routesData.mapName} marklist={routesData.marklist}/> */}

          {routesData.map((route, index) => (
                    <DownMenu
                        key={index}
                        mapName="map_1"
                        marklist={route.marklist}
                        spotFoot={route.spotFoot}
                    />
                ))}
        </div>
    );
};
